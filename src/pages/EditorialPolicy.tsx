import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";

const EditorialPolicy = () => {
  return (
    <Layout>
      <PageHero 
        title="Editorial Policy"
        subtitle="Our commitment to quality, accuracy, and editorial independence."
      />

      <section className="py-16">
        <div className="container-narrow">
          <article className="prose-article">
            <p>
              <strong>Last Updated:</strong> January 2024
            </p>

            <p>
              At Niarticles, we are committed to providing valuable, accurate, and unbiased content 
              to help our readers make informed decisions about digital services. This Editorial 
              Policy outlines the principles and standards that guide our content creation.
            </p>

            <h2>Our Editorial Mission</h2>
            <p>
              Our mission is to create educational content that helps consumers understand digital 
              services, evaluate their options, and make informed decisions. We aim to be a trusted 
              resource by maintaining high standards of accuracy, transparency, and independence.
            </p>

            <h2>Editorial Independence</h2>
            <p>
              Editorial decisions at Niarticles are made independently of commercial considerations. 
              Our content team operates with full editorial freedom to:
            </p>
            <ul>
              <li>Select topics based on reader interest and value</li>
              <li>Present honest assessments of products and services</li>
              <li>Include both positive and negative aspects in our analyses</li>
              <li>Decline to recommend products that don't meet our standards</li>
            </ul>
            <p>
              While we participate in affiliate programs that help support our work, these 
              relationships never influence our editorial content or recommendations.
            </p>

            <h2>Content Standards</h2>

            <h3>Accuracy</h3>
            <p>
              We are committed to accuracy in all our content. This means:
            </p>
            <ul>
              <li>Verifying facts through reliable sources before publication</li>
              <li>Clearly distinguishing between facts and opinions</li>
              <li>Providing context for statistics and claims</li>
              <li>Correcting errors promptly when identified</li>
            </ul>

            <h3>Thoroughness</h3>
            <p>
              Our articles aim to provide comprehensive coverage of topics, including:
            </p>
            <ul>
              <li>Multiple perspectives where relevant</li>
              <li>Practical, actionable information</li>
              <li>Consideration of different user needs and situations</li>
              <li>Clear explanations of complex concepts</li>
            </ul>

            <h3>Clarity</h3>
            <p>
              We write in clear, accessible language that:
            </p>
            <ul>
              <li>Avoids unnecessary jargon</li>
              <li>Explains technical terms when used</li>
              <li>Uses logical structure and organization</li>
              <li>Is appropriate for our general audience</li>
            </ul>

            <h2>Research and Sources</h2>
            <p>
              Our content is based on:
            </p>
            <ul>
              <li>Direct research and testing of products and services</li>
              <li>Official documentation and announcements from companies</li>
              <li>Industry reports and analyses from reputable organizations</li>
              <li>Expert opinions and insights</li>
              <li>User experiences and feedback from various sources</li>
            </ul>
            <p>
              We aim to consult multiple sources and verify information before including it in 
              our content.
            </p>

            <h2>Updates and Corrections</h2>
            <p>
              We recognize that digital services evolve rapidly. We are committed to:
            </p>
            <ul>
              <li>Regularly reviewing and updating existing content</li>
              <li>Correcting errors promptly when they are identified</li>
              <li>Noting significant updates with clear dating</li>
              <li>Welcoming reader feedback about potential inaccuracies</li>
            </ul>
            <p>
              If you notice information that appears outdated or incorrect, please contact us.
            </p>

            <h2>Affiliate Relationships and Disclosure</h2>
            <p>
              Transparency about our business model is essential to maintaining reader trust:
            </p>
            <ul>
              <li>We clearly disclose our participation in affiliate programs</li>
              <li>Affiliate relationships do not influence our editorial content</li>
              <li>We do not receive payment for positive reviews or coverage</li>
              <li>Our recommendations are based on genuine assessment of value</li>
            </ul>

            <h2>What We Don't Do</h2>
            <p>
              To maintain our editorial integrity, we do not:
            </p>
            <ul>
              <li>Accept payment for editorial coverage</li>
              <li>Publish content written by advertisers as editorial content</li>
              <li>Allow commercial relationships to influence our recommendations</li>
              <li>Make misleading claims about products or services</li>
              <li>Copy or plagiarize content from other sources</li>
              <li>Use sensationalized or clickbait headlines</li>
            </ul>

            <h2>Content Categories</h2>
            <p>
              Our content falls into several categories, each with specific purposes:
            </p>
            <ul>
              <li><strong>Educational Guides:</strong> In-depth explanations of how things work</li>
              <li><strong>Consumer Guides:</strong> Practical advice for making decisions</li>
              <li><strong>Comparisons:</strong> Objective analyses of different options</li>
              <li><strong>Best Practices:</strong> Expert recommendations and tips</li>
            </ul>

            <h2>Reader Feedback</h2>
            <p>
              We value feedback from our readers. You can help us maintain high standards by:
            </p>
            <ul>
              <li>Reporting potential errors or outdated information</li>
              <li>Suggesting topics you'd like us to cover</li>
              <li>Sharing your experiences with products and services we discuss</li>
              <li>Providing constructive feedback on our content</li>
            </ul>

            <h2>Contact Our Editorial Team</h2>
            <p>
              For questions about our editorial policy or to provide feedback, please contact us at:
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

export default EditorialPolicy;
