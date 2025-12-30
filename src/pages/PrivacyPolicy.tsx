import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-16">
        <div className="container-narrow">
          <article className="prose-article">
            <p>
              <strong>Last Updated:</strong> January 2024
            </p>

            <p>
              At Niarticles, we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website. 
              Please read this policy carefully to understand our practices regarding your data.
            </p>

            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>
              We may collect information you voluntarily provide, including:
            </p>
            <ul>
              <li>Contact information (name, email address) when you contact us or subscribe to updates</li>
              <li>Feedback, comments, or messages you submit through our contact form</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, certain information is automatically collected, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>IP address (anonymized where possible)</li>
              <li>Device information</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and use personal information 
              about you. Cookies are small data files stored on your device that help us improve your 
              experience.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <p>
              You can control cookies through your browser settings. However, disabling cookies may 
              affect website functionality.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our website</li>
              <li>Respond to your inquiries and requests</li>
              <li>Analyze website usage to improve our content and user experience</li>
              <li>Send periodic communications (if you've opted in)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Third-Party Services and Affiliate Tracking</h2>
            <p>
              Our website may contain links to third-party websites and affiliate partners. When you 
              click on affiliate links, third-party partners may use cookies to track your activity 
              for the purpose of attributing referrals and commissions.
            </p>
            <p>
              We are not responsible for the privacy practices of these third parties. We encourage 
              you to read their privacy policies before providing any personal information.
            </p>

            <h2>Third-Party Advertisers</h2>
            <p>
              We may use third-party advertising companies to serve ads when you visit our website. 
              These companies may use information about your visits to this and other websites to 
              provide relevant advertisements about goods and services that may interest you.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, no method of transmission over the internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights Under GDPR</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data 
              protection rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul>
              <li><strong>Right to Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to our processing of your personal data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16 years of age. We do not knowingly 
              collect personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date. We encourage 
              you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data protection 
              rights, please contact us at:
            </p>
            <p>
              Email: contact@niarticles.com
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
