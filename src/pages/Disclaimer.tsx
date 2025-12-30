import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";

const Disclaimer = () => {
  return (
    <Layout>
      <PageHero 
        title="Disclaimer"
        subtitle="Important information about our content and affiliate relationships."
      />

      <section className="py-16">
        <div className="container-narrow">
          <article className="prose-article">
            <p>
              <strong>Last Updated:</strong> January 2024
            </p>

            <h2>General Information Disclaimer</h2>
            <p>
              The information provided on Niarticles is for general informational and educational 
              purposes only. While we strive to provide accurate and up-to-date information, we make 
              no representations or warranties of any kind, express or implied, about the completeness, 
              accuracy, reliability, suitability, or availability of the information, products, 
              services, or related graphics contained on the website.
            </p>
            <p>
              Any reliance you place on such information is strictly at your own risk. We shall not 
              be liable for any loss or damage arising from your use of this website or reliance on 
              information provided herein.
            </p>

            <h2>No Professional Advice</h2>
            <p>
              The content on this website does not constitute professional, financial, legal, or 
              technical advice. Our articles and guides are meant to provide general information 
              and should not replace professional consultation.
            </p>
            <p>
              Before making any decisions based on information found on this website, we strongly 
              recommend:
            </p>
            <ul>
              <li>Conducting your own research</li>
              <li>Consulting with qualified professionals</li>
              <li>Verifying information with official sources</li>
              <li>Considering your specific circumstances and needs</li>
            </ul>

            <h2>Affiliate Disclosure</h2>
            <p>
              Niarticles participates in affiliate marketing programs. This means that some links 
              on our website are affiliate links, and we may earn a commission if you click through 
              and make a purchase. This comes at no additional cost to you.
            </p>
            <p>
              Important points about our affiliate relationships:
            </p>
            <ul>
              <li>Affiliate commissions help support our editorial work and allow us to provide 
                  free content</li>
              <li>Our editorial opinions and recommendations are independent and not influenced 
                  by affiliate partnerships</li>
              <li>We only recommend products and services we believe provide genuine value</li>
              <li>Not all links on our website are affiliate links</li>
              <li>We clearly identify when content contains affiliate links</li>
            </ul>

            <h2>No Guarantees</h2>
            <p>
              We do not guarantee any specific results from using the products, services, or 
              information mentioned on our website. Individual results may vary based on numerous 
              factors outside our control.
            </p>
            <p>
              Specifically, we make no guarantees about:
            </p>
            <ul>
              <li>The performance of any product or service</li>
              <li>The accuracy of pricing information (prices may change)</li>
              <li>The availability of products or services</li>
              <li>The terms and conditions of third-party offerings</li>
            </ul>

            <h2>Third-Party Content and Links</h2>
            <p>
              Our website may contain links to external websites and references to third-party 
              products, services, and content. These are provided for convenience and informational 
              purposes only.
            </p>
            <p>
              We do not:
            </p>
            <ul>
              <li>Control third-party websites or their content</li>
              <li>Endorse all products or services we mention</li>
              <li>Guarantee the accuracy of third-party information</li>
              <li>Accept responsibility for third-party privacy practices</li>
            </ul>
            <p>
              We recommend reviewing the terms and privacy policies of any third-party websites 
              you visit.
            </p>

            <h2>Product and Service Information</h2>
            <p>
              Information about products and services, including features, pricing, and availability, 
              may change without notice. We make reasonable efforts to keep our content updated, but 
              we cannot guarantee that all information is current at all times.
            </p>
            <p>
              Always verify current details directly with the service provider before making any 
              purchasing decisions.
            </p>

            <h2>Opinions and Views</h2>
            <p>
              The views and opinions expressed in our content are those of the authors and do not 
              necessarily reflect official positions of any companies, products, or services mentioned. 
              Our analyses and conclusions are based on our research and interpretation of available 
              information.
            </p>

            <h2>Changes to Products and Services</h2>
            <p>
              Digital products and services evolve rapidly. Features, terms, pricing, and availability 
              may change after our content is published. We recommend checking official sources for 
              the most current information.
            </p>

            <h2>Errors and Omissions</h2>
            <p>
              Despite our best efforts, errors or omissions may occur in our content. If you notice 
              any inaccuracies, please contact us so we can review and correct them.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this disclaimer or our content practices, please contact us at:
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

export default Disclaimer;
