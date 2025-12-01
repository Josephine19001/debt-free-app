import PageLayout from "@/components/PageLayout";

export default function TermsPage() {
  return (
    <PageLayout minimal>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>

          <div className="space-y-8 text-sm">
            <p className="text-muted">
              Last updated: November 27, 2024
            </p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h2>
              <p className="text-muted leading-relaxed">
                Welcome to Debt Free. These Terms of Service (the "Terms" or "Agreement") govern your access to and use of the Debt Free platform, including our website at debt-free.app (the "Website"), mobile application (the "App"), and all related services, features, content, and functionality (collectively, the "Platform" or "Services") operated by Debt Free ("Debt Free," "we," "us," or "our").
              </p>
              <p className="text-muted leading-relaxed">
                Debt Free is an AI-powered debt management platform designed to help users track their debts, optimize payment strategies using proven methods like the debt avalanche and debt snowball approaches, and receive personalized financial guidance through our AI advisor feature.
              </p>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR PLATFORM.
                </p>
                <p className="text-muted leading-relaxed">
                  BY ACCESSING OR USING OUR WEBSITE, APP, AND PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE AND OUR PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT ACCESS OR USE OUR PLATFORM.
                </p>
                <p className="text-muted leading-relaxed">
                  IF YOU HAVE ANY QUESTIONS REGARDING THESE TERMS, PLEASE CONTACT US AT <a href="mailto:team@lunasync.app" className="text-primary hover:underline">TEAM@DEBT-FREE.APP</a>
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">2. ELIGIBILITY</h2>
              <p className="text-muted leading-relaxed">
                You must be at least 18 years of age to use our Platform. By using our Platform, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>You are at least 18 years of age;</li>
                <li>You have the legal capacity to enter into a binding agreement;</li>
                <li>You are not barred from using the Platform under any applicable laws;</li>
                <li>You will comply with these Terms and all applicable local, state, national, and international laws, rules, and regulations;</li>
                <li>All information you provide to us is accurate, current, and complete.</li>
              </ul>
              <p className="text-muted leading-relaxed">
                If you are using the Platform on behalf of a business or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.
              </p>
            </section>

            {/* 3. Description of Services */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">3. DESCRIPTION OF SERVICES</h2>
              <p className="text-muted leading-relaxed">
                Debt Free provides the following services through our Platform:
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">a. Debt Tracking</h3>
                <p className="text-muted leading-relaxed">
                  Our Platform allows you to manually enter and track your debts, including creditor information, balances, interest rates, minimum payments, and payment due dates. You are responsible for the accuracy of all information you enter.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Payment Strategy Optimization</h3>
                <p className="text-muted leading-relaxed">
                  We provide tools to help you optimize your debt repayment strategy using proven methods such as the debt avalanche (paying off highest interest rate debts first) and debt snowball (paying off smallest balances first) approaches. Our Platform calculates projected payoff dates and potential interest savings based on the information you provide.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">c. AI-Powered Financial Guidance</h3>
                <p className="text-muted leading-relaxed">
                  Our AI advisor feature provides personalized guidance and answers questions about debt management strategies. The AI advisor is designed to help you understand your options and make informed decisions about your debt repayment journey.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">d. Progress Tracking and Notifications</h3>
                <p className="text-muted leading-relaxed">
                  Our Platform provides tools to track your progress toward becoming debt-free, including visual dashboards, milestone celebrations, and optional payment reminders.
                </p>
              </div>
            </section>

            {/* 4. Important Financial Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">4. IMPORTANT FINANCIAL DISCLAIMER</h2>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  DEBT FREE IS NOT A FINANCIAL ADVISOR, TAX ADVISOR, CREDIT COUNSELOR, OR LEGAL ADVISOR.
                </p>
                <p className="text-muted leading-relaxed">
                  The information, tools, and guidance provided through our Platform, including our AI advisor feature, are for educational and informational purposes only. Nothing on our Platform constitutes professional financial, tax, legal, or investment advice.
                </p>
                <p className="text-muted leading-relaxed">
                  Our services are not a substitute for professional financial advice. Before making any financial decisions, including those related to debt repayment, you should consult with qualified professionals such as:
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li>Certified Financial Planners (CFPs)</li>
                  <li>Certified Public Accountants (CPAs)</li>
                  <li>Licensed Credit Counselors</li>
                  <li>Attorneys specializing in debt or bankruptcy law</li>
                </ul>
                <p className="text-muted leading-relaxed">
                  Any projections, calculations, or estimates provided by our Platform are based solely on the information you provide and should not be relied upon as guarantees of future results. Actual results may vary significantly based on changes in interest rates, payment amounts, creditor policies, and other factors.
                </p>
              </div>
            </section>

            {/* 5. User Accounts */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">5. USER ACCOUNTS AND REGISTRATION</h2>

              <div className="space-y-3">
                <h3 className="font-medium">a. Account Creation</h3>
                <p className="text-muted leading-relaxed">
                  To access certain features of our Platform, you must create an account. When creating an account, you agree to provide accurate, current, and complete information and to update such information as necessary to keep it accurate, current, and complete.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Account Security</h3>
                <p className="text-muted leading-relaxed">
                  You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li>Create a strong, unique password;</li>
                  <li>Keep your password confidential and not share it with anyone;</li>
                  <li>Notify us immediately of any unauthorized access to or use of your account;</li>
                  <li>Log out of your account at the end of each session when using shared devices.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">c. Account Termination</h3>
                <p className="text-muted leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to violation of these Terms, fraudulent activity, or inactivity. You may also delete your account at any time through your account settings or by contacting us at <a href="mailto:team@lunasync.app" className="text-primary hover:underline">team@lunasync.app</a>.
                </p>
              </div>
            </section>

            {/* 6. User Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">6. USER RESPONSIBILITIES AND CONDUCT</h2>
              <p className="text-muted leading-relaxed">
                By using our Platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>Provide accurate information about your debts and financial situation;</li>
                <li>Use the Platform only for lawful purposes and in accordance with these Terms;</li>
                <li>Not use the Platform in any way that could damage, disable, overburden, or impair our servers or networks;</li>
                <li>Not attempt to gain unauthorized access to any part of the Platform, other accounts, or any systems or networks connected to our Platform;</li>
                <li>Not use any automated means (such as bots, scrapers, or spiders) to access or collect data from the Platform;</li>
                <li>Not transmit any viruses, malware, or other malicious code;</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
                <li>Not use the Platform for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">7. INTELLECTUAL PROPERTY RIGHTS</h2>

              <div className="space-y-3">
                <h3 className="font-medium">a. Our Intellectual Property</h3>
                <p className="text-muted leading-relaxed">
                  The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, design, selection, and arrangement) are owned by Debt Free, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Limited License</h3>
                <p className="text-muted leading-relaxed">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Platform for your personal, non-commercial use. This license does not include any right to:
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li>Modify or copy the Platform or its contents;</li>
                  <li>Use the Platform or its contents for any commercial purpose;</li>
                  <li>Reverse engineer, decompile, or disassemble any software used in the Platform;</li>
                  <li>Remove any copyright, trademark, or other proprietary notices;</li>
                  <li>Transfer the Platform or any rights therein to another person.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">c. Your Content</h3>
                <p className="text-muted leading-relaxed">
                  You retain ownership of any content you submit, post, or display on or through the Platform ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing and improving our Services.
                </p>
              </div>
            </section>

            {/* 8. Privacy */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">8. PRIVACY</h2>
              <p className="text-muted leading-relaxed">
                Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Platform, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <p className="text-muted leading-relaxed">
                Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your information.
              </p>
            </section>

            {/* 9. Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">9. THIRD-PARTY SERVICES AND LINKS</h2>
              <p className="text-muted leading-relaxed">
                Our Platform may contain links to third-party websites, services, or content that are not owned or controlled by Debt Free. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-muted leading-relaxed">
                Your use of any third-party services is at your own risk and subject to the terms and conditions of those third parties. We encourage you to review the terms and privacy policies of any third-party services you access through our Platform.
              </p>
            </section>

            {/* 10. Disclaimers */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">10. DISCLAIMERS AND LIMITATION OF LIABILITY</h2>

              <div className="space-y-3">
                <h3 className="font-medium">a. Disclaimer of Warranties</h3>
                <p className="text-muted leading-relaxed">
                  THE PLATFORM AND ALL CONTENT, FEATURES, AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, DEBT FREE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-muted leading-relaxed">
                  WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE PLATFORM OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Limitation of Liability</h3>
                <p className="text-muted leading-relaxed">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DEBT FREE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH:
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  <li>Your access to or use of (or inability to access or use) the Platform;</li>
                  <li>Any conduct or content of any third party on the Platform;</li>
                  <li>Any content obtained from the Platform;</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content;</li>
                  <li>Any financial decisions you make based on information provided through the Platform.</li>
                </ul>
                <p className="text-muted leading-relaxed">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID US IN THE PAST TWELVE (12) MONTHS, OR (B) ONE HUNDRED DOLLARS ($100).
                </p>
              </div>
            </section>

            {/* 11. Indemnification */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">11. INDEMNIFICATION</h2>
              <p className="text-muted leading-relaxed">
                You agree to defend, indemnify, and hold harmless Debt Free, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, damages, obligations, losses, liabilities, costs, or expenses (including attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>Your use of and access to the Platform;</li>
                <li>Your violation of these Terms;</li>
                <li>Your violation of any third-party right, including any intellectual property or privacy right;</li>
                <li>Any claim that your User Content caused damage to a third party;</li>
                <li>Any financial decisions or actions you take based on information from the Platform.</li>
              </ul>
            </section>

            {/* 12. Dispute Resolution */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">12. DISPUTE RESOLUTION</h2>

              <div className="space-y-3">
                <h3 className="font-medium">a. Informal Resolution</h3>
                <p className="text-muted leading-relaxed">
                  Before filing a claim, you agree to try to resolve the dispute informally by contacting us at <a href="mailto:team@lunasync.app" className="text-primary hover:underline">team@lunasync.app</a>. We will try to resolve the dispute informally by contacting you via email within 30 days.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">b. Arbitration Agreement</h3>
                <p className="text-muted leading-relaxed">
                  If we cannot resolve a dispute informally, you and Debt Free agree to resolve any claims relating to these Terms or the Platform through final and binding arbitration, except as set forth below. The arbitration will be conducted by the American Arbitration Association (AAA) under its rules.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">c. Class Action Waiver</h3>
                <p className="text-muted leading-relaxed">
                  YOU AND DEBT FREE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">d. Exceptions</h3>
                <p className="text-muted leading-relaxed">
                  Nothing in this section shall prevent either party from seeking injunctive or other equitable relief in court to prevent the actual or threatened infringement of intellectual property rights.
                </p>
              </div>
            </section>

            {/* 13. Governing Law */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">13. GOVERNING LAW AND JURISDICTION</h2>
              <p className="text-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in Delaware, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            {/* 14. Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">14. CHANGES TO TERMS OF SERVICE</h2>
              <p className="text-muted leading-relaxed">
                We reserve the right to modify these Terms at any time in our sole discretion. If we make material changes, we will notify you by email, through the Platform, or by posting a notice on our Website prior to the effective date of the changes. Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the modified Terms.
              </p>
              <p className="text-muted leading-relaxed">
                We encourage you to review these Terms periodically to stay informed of updates. The "Last updated" date at the top of these Terms indicates when they were last revised.
              </p>
            </section>

            {/* 15. Termination */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">15. TERMINATION</h2>
              <p className="text-muted leading-relaxed">
                We may terminate or suspend your access to the Platform immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Platform will immediately cease.
              </p>
              <p className="text-muted leading-relaxed">
                All provisions of these Terms that by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* 16. Severability */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">16. SEVERABILITY</h2>
              <p className="text-muted leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other provision of these Terms, and these Terms shall be construed as if such invalid, illegal, or unenforceable provision had never been contained herein.
              </p>
            </section>

            {/* 17. Waiver */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">17. WAIVER</h2>
              <p className="text-muted leading-relaxed">
                The failure of Debt Free to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by Debt Free.
              </p>
            </section>

            {/* 18. Entire Agreement */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">18. ENTIRE AGREEMENT</h2>
              <p className="text-muted leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Platform, constitute the entire agreement between you and Debt Free regarding your use of the Platform and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning its subject matter.
              </p>
            </section>

            {/* 19. Contact Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">19. CONTACT INFORMATION</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted leading-relaxed">
                Email: <a href="mailto:team@lunasync.app" className="text-primary hover:underline">team@lunasync.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
