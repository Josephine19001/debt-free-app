import PageLayout from "@/components/PageLayout";

export default function PrivacyPage() {
  return (
    <PageLayout minimal>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <div className="space-y-8 text-sm">
            <p className="text-muted">
              Last updated: November 27, 2024
            </p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">1. INTRODUCTION</h2>
              <p className="text-muted leading-relaxed">
                Debt Free ("Debt Free," "we," "us," or "our") respects the privacy of its Users ("User," "your," or "you"). This Privacy Policy (the "Privacy Policy") explains how we collect, use, disclose, and safeguard your information when you use the Debt Free Platform (the "Platform") through our website at debt-free.app (the "Website") or Debt Free's mobile application (the "App"). Debt Free is an AI-powered debt management platform that helps users track debts, optimize payment strategies, and achieve financial freedom.
              </p>
              <p className="text-muted leading-relaxed">
                Debt Free is committed to protecting the privacy of its Users whose information is collected and stored while using Debt Free's Platform through our Website or App. This Privacy Policy is applicable to our Website, Platform and all applications offered to the public.
              </p>
              <p className="text-muted leading-relaxed">
                The capitalized terms have the same meaning as ascribed in our Terms of Service, unless otherwise noted here.
              </p>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND OUR POLICIES AND PRACTICES REGARDING YOUR INFORMATION AND HOW WE WILL TREAT IT.
                </p>
                <p className="text-muted leading-relaxed">
                  BY ACCESSING OR USING OUR WEBSITE, APP, AND PLATFORM, YOU AGREE TO ACCEPT ALL THE TERMS CONTAINED IN THIS PRIVACY POLICY AND ACKNOWLEDGE AND AGREE WITH THE PRACTICES DESCRIBED HEREIN. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS AND USE OUR WEBSITE, APP, AND PLATFORM.
                </p>
                <p className="text-muted leading-relaxed">
                  IF YOU HAVE ANY QUESTIONS REGARDING THIS PRIVACY POLICY, PLEASE SEND US AN EMAIL AT <a href="mailto:team@debt-free.app" className="text-primary hover:underline">TEAM@DEBT-FREE.APP</a>
                </p>
                <p className="text-muted leading-relaxed font-medium">
                  WE DO NOT SELL YOUR PERSONAL INFORMATION, NOR DO WE INTEND TO DO SO. WE DO NOT GIVE ACCESS TO YOUR PERSONAL INFORMATION TO THIRD PARTIES EXCEPT TO SUBPROCESSORS TO ASSIST US IN THE PROVISION OF OUR SERVICES TO YOU.
                </p>
              </div>
            </section>

            {/* 2. What Information Do We Collect */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">2. WHAT INFORMATION DO WE COLLECT?</h2>
              <p className="text-muted leading-relaxed">
                When you register to use our Website, App, or Platform, we collect personal information (also referred to as personally identifiable information or "PII") which may include your first and last name, online contact information such as your email address or username, phone number, financial information related to your debts (creditor names, balances, interest rates, minimum payments), payment history, and other personal information necessary to provide our debt management services. The information so collected will be stored on our servers. You are able to change your personal information via email by contacting us at <a href="mailto:team@debt-free.app" className="text-primary hover:underline">team@debt-free.app</a> or through your profile or account settings on our Website, App, or Platform.
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">a. Device and Usage Information</h3>
                <p className="text-muted leading-relaxed">
                  We may collect information that does not personally identify you such as (i) information about your internet connection, the equipment you use to access our Website, App, or Platform, and usage details — browsing history information regarding User's interaction with our Website, App, or Platform.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Financial Information</h3>
                <p className="text-muted leading-relaxed">
                  We collect debt-related financial information that you voluntarily provide, including creditor names, account balances, interest rates, minimum payment amounts, and payment due dates. This information is used solely to provide our debt tracking and optimization services. We do not store bank login credentials. If payment processing is required, we use third-party payment processors and do not store credit card or bank account information on our servers.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">c. AI Advisor Interactions</h3>
                <p className="text-muted leading-relaxed">
                  When you interact with our AI advisor feature, we collect and store conversation data to provide personalized financial guidance and improve our services. This data is processed securely and is not shared with third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* 3. How Do We Collect Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">3. HOW DO WE COLLECT INFORMATION?</h2>
              <p className="text-muted leading-relaxed">
                We collect personal information from you in the following ways:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>At registration on our Website, App, or Platform;</li>
                <li>When you manually enter debt information into the Platform;</li>
                <li>In email, text, and other electronic messages between you and our Website, App, or Platform;</li>
                <li>Through mobile and desktop applications you download from our Website, App, or Platform;</li>
                <li>From forms filled out by you;</li>
                <li>From records or copies of correspondences (including email addresses) if you contact us;</li>
                <li>From search queries on our Website, App, or Platform;</li>
                <li>When you interact with our AI advisor feature;</li>
                <li>From third-party analytics providers.</li>
              </ul>
              <p className="text-muted leading-relaxed">
                We collect information from you automatically when you navigate through our Website, App, or Platform in the following ways:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>Usage details;</li>
                <li>IP addresses;</li>
                <li>Information obtained through browser cookies;</li>
                <li>Web beacons on our Website; and</li>
                <li>Other tracking technologies.</li>
              </ul>
            </section>

            {/* 4. How Do We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">4. HOW DO WE USE YOUR INFORMATION?</h2>
              <p className="text-muted leading-relaxed">
                We use the information that you provide to:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>Personalize your experience in using our Platform;</li>
                <li>Calculate debt payoff projections and optimize payment strategies;</li>
                <li>Provide AI-powered financial guidance through our advisor feature;</li>
                <li>Provide you with information or services requested from us;</li>
                <li>Present our Website, App, and Platform and their contents to you;</li>
                <li>Provide you with notices about account and/or subscription, including expiration and renewal notices;</li>
                <li>Carry out obligations and enforce rights arising from contracts entered into between you and us;</li>
                <li>Notify you about changes to our Website, App, and Platform and any products or services;</li>
                <li>Improve the Website, App, and Platform;</li>
                <li>Improve our customer service;</li>
                <li>Contact you for other purposes such as User interviews with your consent;</li>
                <li>Send you periodic emails regarding your debt journey progress and financial tips.</li>
              </ul>
            </section>

            {/* 5. Our Cookie Policy */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">5. OUR COOKIE POLICY</h2>
              <p className="text-muted leading-relaxed">
                Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones, and other devices. Other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, are used for similar purposes. In this Privacy Policy, we refer to all of these technologies as "Cookies."
              </p>
              <p className="text-muted leading-relaxed">
                We use Cookies on our Website and App to (a) understand and save your preferences for future visits, (b) compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future, and (c) allow trusted third-party services that track this information on our behalf. You can set your browser to refuse all or some browser Cookies, but it may affect your user experience. We honor Do Not Track signals and, if one is in place, we will not track, plant cookies, or use advertising.
              </p>
            </section>

            {/* 6. How Do We Protect Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">6. HOW DO WE PROTECT INFORMATION WE COLLECT?</h2>
              <p className="text-muted leading-relaxed">
                Our Website and App receive regular security scans and penetration tests. Our Website and App also receive regular malware scans. In addition, our Website and App use SSL certificates as an added security measure. We require username and passwords for our employees who can access your personal information that we store and/or process on our Platform and servers. In addition, we actively prevent third parties from getting access to your personal information that we store and/or process on our Platform and servers.
              </p>
            </section>

            {/* 7. Data Security Measures */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">7. DATA SECURITY MEASURES</h2>

              <div className="space-y-3">
                <h3 className="font-medium">a. Security Measures</h3>
                <p className="text-muted leading-relaxed">
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. All debt and financial data is encrypted using bank-level AES-256 encryption both in transit and at rest.
                </p>
                <p className="text-muted leading-relaxed">
                  The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, App, or Platform, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website, App, or Platform. Any transmission of personal information is at your own risk.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Data Breach Notification</h3>
                <p className="text-muted leading-relaxed">
                  In the event of a personal data breach, we will notify you within seventy-two (72) hours, or within such time as required under the applicable data privacy laws via: (i) email and/or (ii) our Platform notification system on our Website and/or App.
                </p>
              </div>
            </section>

            {/* 8. Disclosure of Personal Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">8. DISCLOSURE OF PERSONAL INFORMATION</h2>
              <p className="text-muted leading-relaxed">
                There are times when we may share Personal Information that you have shared with us with others to enable us to provide our Services, including contractors, service providers, and third parties ("Partners"). We will ensure that our Partners protect your Personal Information.
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">a. Disclosure of Personal Information</h3>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li>We may disclose aggregated, de-personalized information about you that does not identify any individual to other parties without restriction.</li>
                  <li>We may disclose personal information to our subsidiaries and affiliates.</li>
                  <li>We may disclose personal information to contractors, service providers, and other third parties who are bound by contractual obligations to keep personal information confidential.</li>
                  <li>We may disclose personal information in the event of a merger, sale of business, etc.</li>
                  <li>We may disclose personal information to fulfill the purpose for which you have provided it.</li>
                  <li>We do NOT sell your personal information to others for their use.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Other Disclosure of Personal Information</h3>
                <p className="text-muted leading-relaxed">
                  We will disclose personal information (i) to comply with any court order, law, or legal process, including to respond to any government or regulatory request, (ii) to enforce or apply our Terms of Service and other agreements, (iii) if we believe it is necessary or appropriate to protect the rights, property, or safety of Debt Free, our customers or others.
                </p>
              </div>
            </section>

            {/* 9. AI Processing */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">9. AI PROCESSING AND DATA USAGE</h2>
              <p className="text-muted leading-relaxed">
                Debt Free uses artificial intelligence to provide personalized debt management advice and payment optimization strategies. Our AI systems are designed to enhance your financial journey while maintaining strict privacy protections:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li><strong>Data Protection:</strong> Your personal financial data is processed securely and is not used to train machine learning models shared with third parties.</li>
                <li><strong>Output Monitoring:</strong> All AI-generated recommendations undergo quality assurance to ensure accuracy and appropriateness.</li>
                <li><strong>Human Oversight:</strong> Our AI provides guidance only; all financial decisions remain yours to make.</li>
                <li><strong>Transparency:</strong> Users can request information about how AI systems process their data and influence their platform experience.</li>
              </ul>
            </section>

            {/* 10. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">10. DATA RETENTION</h2>
              <p className="text-muted leading-relaxed">
                We retain personal data and PII only for as long as necessary to fulfill the purposes for which it was collected, including to comply with legal, regulatory, or operational requirements, enforce our Terms of Service, or protect the safety and integrity of our Platform.
              </p>
              <p className="text-muted leading-relaxed">
                User information associated with inactive or deleted accounts may be retained for a limited period (typically no more than 90 days) for purposes such as account recovery, fraud prevention, or dispute resolution, after which it is securely deleted or anonymized in accordance with applicable laws.
              </p>
              <p className="text-muted leading-relaxed">
                We do not knowingly retain personal information of users under the age of 18. If we become aware that such data has been collected, it will be promptly deleted.
              </p>
            </section>

            {/* 11. Your California Privacy Rights */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">11. YOUR CALIFORNIA PRIVACY RIGHTS</h2>
              <p className="text-muted leading-relaxed">
                Debt Free does not sell, trade, or otherwise transfer to outside third parties your "Personal Information" as the term is defined under the California Civil Code Section § 1798.82(h). Additionally, California Civil Code Section § 1798.83 permits Users of our Website, App, or Platform that are California residents to request certain information regarding our disclosure of their Personal Information to third parties for their direct marketing purposes.
              </p>
              <p className="text-muted leading-relaxed">
                To make a request for such disclosure, or identification and/or deletion of Personal Information in all our systems that we store on you, please send an email to <a href="mailto:team@debt-free.app" className="text-primary hover:underline">team@debt-free.app</a>.
              </p>
            </section>

            {/* 12. COPPA Compliance */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">12. COPPA COMPLIANCE (CHILDREN UNDER 13)</h2>
              <p className="text-muted leading-relaxed">
                The Children's Online Privacy Protection Act ("COPPA") is a federal legislation that applies to entities that collect and store "Personal Information" from children under the age of 13. Our Website, App, and Platform are available for use and download only for Users over the age of 18, and is NOT meant for use by children under the age of 13. We do not knowingly collect or retain personal information of users under the age of 18. If we become aware that such data has been collected, it will be promptly deleted.
              </p>
              <p className="text-muted leading-relaxed font-medium">
                IF YOU ARE UNDER 18, PLEASE DO NOT ACCESS OR USE OUR WEBSITE, APP, OR PLATFORM.
              </p>
            </section>

            {/* 13. For European Users */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">13. FOR OUR EUROPEAN USERS</h2>
              <p className="text-muted leading-relaxed">
                If you are a resident of or a visitor to Europe, you have certain rights with respect to the processing of your Personal Data, as defined in the General Data Protection Regulation ("GDPR").
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">Rights of Data Subjects</h3>
                <p className="text-muted leading-relaxed">
                  To make any of the following requests, please contact us at <a href="mailto:team@debt-free.app" className="text-primary hover:underline">team@debt-free.app</a>:
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li><strong>Access:</strong> You can request more information about the Personal Information we hold about you and a copy of the Personal Information.</li>
                  <li><strong>Rectification:</strong> If you believe that any Personal Information we are holding about you is incorrect or incomplete, you can request that we correct or supplement such data.</li>
                  <li><strong>Objection:</strong> You can contact us to let us know that you object to the collection or use of your Personal Information for certain purposes.</li>
                  <li><strong>Erasure:</strong> You can request that we erase some or all of your Personal Information from our systems.</li>
                  <li><strong>Restriction of Processing:</strong> You can ask us to restrict further processing of your Personal Information.</li>
                  <li><strong>Portability:</strong> You have the right to ask for a copy of your Personal Information in a machine-readable format.</li>
                  <li><strong>Withdrawal of Consent:</strong> If we are processing your Personal Information based on your consent, you have the right to withdraw your consent at any time.</li>
                  <li><strong>Right to File Complaint:</strong> You have the right to lodge a complaint about our practices with respect to your Personal Information with the supervisory authority of your country or EU Member State.</li>
                </ul>
              </div>
            </section>

            {/* 14. CAN-SPAM Act */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">14. CAN-SPAM ACT OF 2003</h2>
              <p className="text-muted leading-relaxed">
                The CAN-SPAM Act establishes requirements for commercial messages, gives recipients the right to have businesses stop emailing them, and spells out penalties for violations. Per the CAN-SPAM Act, we will:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>Not use false or misleading subjects or email addresses;</li>
                <li>Identify the email message as an advertisement in some reasonable way;</li>
                <li>Include our physical address;</li>
                <li>Monitor third-party email marketing services for compliance, if one is used;</li>
                <li>Honor opt-out/unsubscribe requests quickly; and</li>
                <li>Give an "opt-out" or "unsubscribe" option.</li>
              </ul>
              <p className="text-muted leading-relaxed">
                If you wish to opt out of email marketing, follow the instructions at the bottom of each email or contact us at <a href="mailto:team@debt-free.app" className="text-primary hover:underline">team@debt-free.app</a> and we will promptly remove you from all future marketing correspondences.
              </p>
            </section>

            {/* 15. Modifications */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">15. MODIFICATIONS TO OUR PRIVACY POLICY</h2>
              <p className="text-muted leading-relaxed">
                Debt Free reserves the right, at its sole discretion, to change or modify this Privacy Policy at any time. In the event we modify this Privacy Policy, such modifications shall be binding on you only upon your acceptance of the modified Privacy Policy. We will inform you about the modifications via email, on our Website, App, or Platform by posting a modified version of the Privacy Policy page, or by a comparable means within a reasonable time period. Your continued use of our Website, App, or Platform shall constitute your consent to such changes.
              </p>
            </section>

            {/* 16. Contact */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">16. CONTACT US</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-muted leading-relaxed">
                Email: <a href="mailto:team@debt-free.app" className="text-primary hover:underline">team@debt-free.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
