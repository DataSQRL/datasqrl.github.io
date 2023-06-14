import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader';

const header =  {
  title: 'DataSQRL Metrics Subscription Demo',
  tagLine: 'Metrics Subscription Demo',
  text: (
    <>
      This page demonstrates how to consume the metrics subscription from the <Link to="/docs/getting-started/quickstart">Quickstart tutorial</Link><br />
      Follow the instructions below to build realtime updates with DataSQRL.
    </>
  ),
  LogoSvg: require('../../static/img/full_squirrel.svg').default,
}

const mutationGraphQL =
`mutation addReading {
  AddReading(metric: {
    sensorid: 1,
    temperature: 47.2
  }) {
    sensorid
    _source_time
  }
}`;

const compileCmd =
  `docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl metricsapi.graphqls;
(cd build/deploy; docker compose up)`;

export default function WebSocketSubscriptionExample() {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8888/graphql-ws');

    socket.addEventListener('open', (event) => {
      socket.send(JSON.stringify({
        type: 'connection_init',
        payload: {}
      }));

      setTimeout(() => {
        socket.send(JSON.stringify({
          id: '1',
          type: 'start',
          payload: {
            query: `subscription {
                              SecReading {
                                  sensorid
                                  timeSec
                                  temp
                              }
                          }`,
            variables: {}
          }
        }));
      }, 1000);
    });

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('Message from server:', data);

      if (data.type === 'data' && data.payload.data.SecReading) {
        const reading = data.payload.data.SecReading;
        const tableBody = document.getElementById('tableBody');
        const newRow = tableBody.insertRow();

        newRow.insertCell(0).innerText = reading.sensorid;
        newRow.insertCell(1).innerText = reading.timeSec;
        newRow.insertCell(2).innerText = reading.temp;
      }
    });

    socket.addEventListener('close', (event) => {
      console.log('Server closed connection: ', event);
    });

    socket.addEventListener('error', (event) => {
      console.log('Error from server: ', event);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Layout
      title={header.title}
      description={header.tagLine}>
      <HomepageHeader {...header} />
      <main>
        <section className={styles.closer}>
          <div className="container">
            <div className="row margin-bottom--md">
              <div className="col col--6">
                <h2 className="margin-bottom--md">Instructions</h2>
                <ol>
                  <li>
                    Follow the instructions from the <Link to="/docs/getting-started/quickstart">Quickstart tutorial</Link> up to
                    the <Link to="/docs/getting-started/quickstart#subscription">subscriptions section</Link>.<br />
                    Your <code>metrics.sqrl</code> script should <Link to="https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/sensors/metrics-mutation.sqrl">look like this</Link> and
                    your <code>metricsapi.graphqls</code> GraphQL schema should <Link to="https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/sensors/metricsapi.graphqls">look like this</Link>.
                  </li>
                  <li>
                    Compile and run the script with the commands:
                    <CodeBlock language="bash">
                      {compileCmd}
                    </CodeBlock>
                  </li>
                  <li>
                    Wait until the service is up and running (this takes a few minutes), then <strong>refresh this webpage</strong> to connect to the service.
                  </li>
                  <li>
                    Open GraphiQL in <Link to="http://localhost:8888/graphiql/?query=mutation%20addReading%20%7B%0A%20%20AddReading(metric%3A%20%7B%0A%20%20%20%20sensorid%3A%201%2C%0A%20%20%20%20temperature%3A%2047.2%0A%20%20%7D)%20%7B%0A%20%20%20%20sensorid%0A%20%20%20%20_source_time%0A%20%20%7D%0A%7D%0A%0A&operationName=addReading">your browser</Link> and invoke the mutation to add some data:
                    <CodeBlock language="graphql">
                      {mutationGraphQL}
                    </CodeBlock>
                    Run the mutation repeatedly with different input data.
                  </li>
                  <li>
                    You should see data appear in the table to the right. Check the console logs for errors (your browser may block access to localhost).
                  </li>
                </ol>
              </div>
              <div className="col col--6">
                <h2 className="margin-bottom--md">Subscription Data (updated in realtime)</h2>
                <table className={styles.table}>
                  <thead>
                  <tr>
                    <th>Sensor ID</th>
                    <th>Time (UTC)</th>
                    <th>Temperature</th>
                  </tr>
                  </thead>
                  <tbody id="tableBody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}