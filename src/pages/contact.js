import React from 'react';
import Layout from '@theme/Layout';


export default function Contact() {
 return (
   <Layout title="Hello">
     <div
       style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height: '50vh',
         fontSize: '20px',
       }}>
       <p>
         Submit this form to get in touch
       </p>
     </div>
   </Layout>
 );
};