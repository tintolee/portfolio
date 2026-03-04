import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section, Card } from '../components/ui';

export default function InvoiceFlowProPrivacy() {
  return (
    <>
      <Helmet>
        <title>Invoice Flow Pro Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for Invoice Flow Pro covering data collection, use, retention, and your rights."
        />
      </Helmet>
      <Section id="invoice-flow-pro-privacy">
        <h1 className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">
          Privacy Policy for Invoice Flow Pro
        </h1>
        <Card className="prose max-w-none dark:prose-invert p-6">
          <p>
            <strong>Official policy URL:</strong>{' '}
            <a href="https://tosinadelaja.com/invoice-flow-pro-privacy">
              https://tosinadelaja.com/invoice-flow-pro-privacy
            </a>
          </p>
          <p>
            <strong>Last updated:</strong> March 2025
          </p>
          <p>
            <strong>Developer / Contact:</strong> Oluwatosin Adelaja
            <br />
            <strong>Email:</strong> adelajaolutosin@gmail.com
            <br />
            <strong>App:</strong> Invoice Flow Pro (iOS / Android)
          </p>

          <hr />

          <h2>1. Introduction</h2>
          <p>
            Invoice Flow Pro ("the App") is an invoicing and quoting application. This Privacy Policy explains what data
            the App collects, how it is used, and your rights regarding that data. By using the App, you agree to this
            policy.
          </p>

          <h2>2. Data We Collect and How We Use It</h2>

          <h3>2.1 Account and authentication</h3>
          <ul>
            <li>
              <strong>What:</strong> When you sign in, we use a third-party authentication provider (Clerk) to manage
              your account. This may include your email address and account identifiers.
            </li>
            <li>
              <strong>Why:</strong> To secure your account and link your data to you.
            </li>
            <li>
              <strong>Who processes it:</strong> Clerk (https://clerk.com). Their privacy policy applies to
              authentication data: https://clerk.com/legal/privacy-policy.
            </li>
          </ul>

          <h3>2.2 Data you create in the App (your content)</h3>
          <ul>
            <li>
              <strong>What:</strong> Information you enter in the App, such as:
              <ul>
                <li>Company details (name, address, logo, payment/bank details)</li>
                <li>Customer names, addresses, emails, phone numbers</li>
                <li>Invoices, quotes, line items, amounts, VAT, payment records</li>
                <li>Products and services, recurring templates, attachments</li>
              </ul>
            </li>
            <li>
              <strong>Why:</strong> To provide invoicing, quoting, PDF export, and related features.
            </li>
            <li>
              <strong>Where it is stored:</strong>
              <ul>
                <li>
                  <strong>On your device:</strong> This data is stored locally on your phone or tablet (e.g. in the
                  App&apos;s local database).
                </li>
                <li>
                  <strong>Optional cloud sync:</strong> If you have cloud sync enabled (e.g. via Supabase), a copy may
                  be stored on servers used for sync. We do not use your content for advertising or sell it to third
                  parties.
                </li>
              </ul>
            </li>
          </ul>

          <h3>2.3 Optional cloud sync</h3>
          <ul>
            <li>
              <strong>What:</strong> If sync is configured, your invoices, customers, and products may be synced to a
              cloud database (Supabase) so you can use the App on more than one device.
            </li>
            <li>
              <strong>Why:</strong> To back up and sync your data across your devices.
            </li>
            <li>
              <strong>Who processes it:</strong> Supabase (https://supabase.com). Their privacy and data processing
              terms apply to data stored in their service.
            </li>
          </ul>

          <h3>2.4 Analytics and crashes (if applicable)</h3>
          <ul>
            <li>
              <strong>What:</strong> We may collect anonymous usage or crash information to improve the App (e.g. which
              features are used, or error reports).
            </li>
            <li>
              <strong>Why:</strong> To fix bugs and improve the App. We do not use this data to identify you personally
              for advertising.
            </li>
          </ul>

          <h3>2.5 Data we do not collect</h3>
          <p>We do not sell your personal data or invoice data. We do not use your content for advertising or marketing by us or third parties.</p>

          <h2>3. Data Retention</h2>
          <ul>
            <li>
              <strong>On your device:</strong> Data remains on your device until you delete it or uninstall the App. You
              can also use in-App options (e.g. delete account, clear data) where available.
            </li>
            <li>
              <strong>In the cloud:</strong> If you use sync, data in the cloud is retained according to the sync
              provider&apos;s terms. You can delete your account or request deletion of synced data; contact us to request
              deletion of data we control.
            </li>
          </ul>

          <h2>4. Data Sharing and Third Parties</h2>
          <p>We do not sell or rent your data. We may share data only in these situations:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Authentication (Clerk) and, if you use it, sync (Supabase) process data
              as necessary to provide the App. They are required to protect your data under their own policies and
              agreements.
            </li>
            <li>
              <strong>Legal:</strong> We may disclose data if required by law (e.g. court order or valid legal process) or
              to protect our or others&apos; rights and safety.
            </li>
            <li>
              <strong>Your actions:</strong> When you export PDFs or share content (e.g. by email), that data is shared by
              you with the recipients you choose.
            </li>
          </ul>

          <h2>5. Security</h2>
          <p>We use industry-standard practices to protect your data, including:</p>
          <ul>
            <li>Secure authentication (e.g. via Clerk).</li>
            <li>Data stored on your device in a local, protected database.</li>
            <li>If sync is used, data is transmitted over encrypted connections (e.g. HTTPS).</li>
          </ul>
          <p>You are responsible for keeping your device and account credentials secure.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Ask us to correct inaccurate data.
            </li>
            <li>
              <strong>Deletion:</strong> Ask us to delete your data, subject to legal or contractual exceptions.
            </li>
            <li>
              <strong>Portability:</strong> Request your data in a portable format where technically feasible.
            </li>
            <li>
              <strong>Object or restrict:</strong> Object to or request restriction of certain processing.
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at adelajaolutosin@gmail.com. We will respond within a reasonable time
            and in line with applicable law.
          </p>
          <p>
            If you are in the European Economic Area or UK, you also have the right to lodge a complaint with your local
            data protection authority.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The App is not directed at children under 13 (or the applicable age in your country). We do not knowingly
            collect personal data from children. If you believe a child has provided us with data, please contact us and
            we will delete it.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy at
            https://tosinadelaja.com/invoice-flow-pro-privacy and change the "Last updated" date. For material changes, we
            may notify you in the App or by email where possible. Continued use of the App after changes means you accept
            the updated policy.
          </p>

          <h2>9. Contact</h2>
          <p>For privacy-related questions, to exercise your rights, or to request deletion of your data:</p>
          <ul>
            <li>
              <strong>Email:</strong> adelajaolutosin@gmail.com
            </li>
            <li>
              <strong>Developer:</strong> Oluwatosin Adelaja
            </li>
          </ul>

          <p>
            <em>This privacy policy applies to Invoice Flow Pro and its associated services.</em>
          </p>
        </Card>
      </Section>
    </>
  );
}
