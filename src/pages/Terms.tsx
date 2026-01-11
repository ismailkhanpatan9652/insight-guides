import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";

const Terms = () => {
  return (
    <Layout>
      <PageHero 
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website."
      />

      <section className="py-16">
        <div className="container-narrow">
          <article className="prose-article">
            <p>
              <strong>Last Updated:</strong> January 2024
            </p>

            <p>
              Welcome to Mallinova. These Terms and Conditions govern your use of our website 
              and services. By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms 
              and Conditions and our Privacy Policy. If you do not agree to these terms, please do 
              not use our website.
            </p>

            <h2>Description of Service</h2>
            <p>
              Mallinova is an informational content platform that publishes articles, guides, and 
              insights about digital services and products. Our content is intended for educational 
              and informational purposes only.
            </p>

            <h2>Use of Content</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of Mallinova or its content suppliers and is protected by copyright laws.
            </p>
            <p>You may:</p>
            <ul>
              <li>View and read content for personal, non-commercial use</li>
              <li>Share links to our content on social media</li>
              <li>Quote brief excerpts with proper attribution</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or republish content without permission</li>
              <li>Modify or create derivative works from our content</li>
              <li>Use content for commercial purposes without authorization</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The information on this website is provided "as is" without warranties of any kind, 
              either express or implied. We do not warrant that:
            </p>
            <ul>
              <li>The content is accurate, complete, or current</li>
              <li>The website will be uninterrupted or error-free</li>
              <li>Any defects will be corrected</li>
              <li>The website is free of viruses or harmful components</li>
            </ul>

            <h2>No Professional Advice</h2>
            <p>
              Our content is for general informational purposes only and does not constitute 
              professional advice. The information provided should not be used as a substitute 
              for professional consultation. We recommend consulting qualified professionals 
              for specific advice related to your situation.
            </p>

            <h2>No Affiliation with Brands</h2>
            <p>
              Mallinova is an independent content platform. We are not affiliated with, endorsed 
              by, or officially connected to any of the brands, companies, or services mentioned 
              in our content unless explicitly stated otherwise.
            </p>

            <h2>Affiliate Disclosure</h2>
            <p>
              Some links on our website may be affiliate links. This means we may earn a commission 
              if you make a purchase through these links, at no additional cost to you. These 
              partnerships help support our editorial work.
            </p>
            <p>
              Our editorial content and opinions are not influenced by affiliate relationships. 
              We only recommend products and services we believe provide genuine value to our readers.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for 
              convenience only. We do not control these websites and are not responsible for their 
              content, privacy policies, or practices. Visiting third-party websites is at your own risk.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Mallinova shall not be liable for any direct, 
              indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul>
              <li>Your use of or inability to use the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access to your data</li>
              <li>Any third-party actions or content</li>
            </ul>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mallinova, its owners, employees, and 
              affiliates from any claims, damages, or expenses arising from your use of the website 
              or violation of these terms.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will 
              be effective immediately upon posting on this page. Your continued use of the website 
              after any modifications constitutes acceptance of the revised terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with applicable 
              laws. Any disputes shall be subject to the exclusive jurisdiction of the competent courts.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions 
              shall continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              Email: contact@mallinova.shop
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
