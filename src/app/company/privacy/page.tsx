import Box from "@mui/material/Box"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | CustomMade Games",
}

export default function PrivacyPage(){
    return (
        <Box sx={{ margin: { xs: "0 5%", md: "0 10% "}}}>
            <main>
            <h1>Privacy Policy</h1>

            <p>Effective Date: 2026-3-14</p>
            <p>Website Name: CustomMade Games</p>
            <p>Website URL: custommade.games</p>

            <h2>Introduction</h2>
            <p>This Privacy Policy explains how CustomMade Games (“we,” “us,” or “our”) collects, uses, and protects information when you use our website and browser-based game generators (the “Service”).</p>
            <p>By using this website, you agree to the practices described in this policy.</p>

            <h2>Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>We do not require user accounts, collect names, email addresses, or contact details, store user-submitted content on our servers, maintain user profiles, or directly collect any personal information.</p>
            <p>All game inputs are processed locally in your browser and are not transmitted to or stored by us.</p>

            <h3>Information Collected Automatically</h3>
            <p>Although we do not directly collect personal data, certain third party services used on this website may automatically collect information, including:</p>
            <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring website</li>
                <li>General geographic location (city/region level)</li>
            </ul>
            <p>This information is collected through analytics tools and advertising technologies and is not stored or controlled by us.</p>

            <h2>Analytics</h2>
            <p>We use Google Analytics to understand general website useage and improve the Service.</p>
            <p>Google Analytics may collect information such as:</p>
            <ul>
                <li>IP address</li>
                <li>Device and browser information</li>
                <li>Usage and interaction data</li>
            </ul>
            <p>We do not access personally identifiable user profiles through Google Analytics</p>
            <p>Google may use this data in accordance with its own Privacy Policy</p>
            <p>https://policies.google.com/privacy</p>
            <p>You can opt out of Google Analytics by visiting :</p>
            <p>https://tools.google.com/dlpage/gaoptout</p>

            <h2>Advertising</h2>
            <p>We may display advertisements on our website through Google Ads (including Google AdSense), and/or other third-party advertising networks.</p>
            <p>These advertising partners may use cookies or other tracking techologies to:</p>
            <ul>
                <li>Deliver relevant advertisements</li>
                <li>Measure ad performance</li>
                <li>Personalize advertising content</li>
            </ul>
            <p>We do not control how third-party advertising providers collect or use data. Their practices are governed by their respective privacy policies.</p>
            <p>You can learn more about Google's advertising practices here:</p>
            <p>https://policies.google.com/technologies/ads</p>
            <p>You may opt out of personalized advertising by visiting:</p>
            <p>https://www.google.com/settings/ads</p>

            <h2>Cookies</h2>
            <p>This website uses cookies primarily through third-party services for:</p>
            <ul>
                <li>Analytics</li>
                <li>Advertising</li>
                <li>Basic functionalty</li>
            </ul>
            <p>You may control or disable cookies through your browser settings. Disabling cookies may affect site functionality.</p>

            <h2>Data Storage</h2>
            <p>We do not maintain databases of user information.</p>
            <p>All generators operate entirely in your browser. Any content create remains on your device unless you choose to share or export it.</p>

            <h2>Children's Privacy</h2>
            <p>This website is not directed at children under the age of 13. We cannot not knowingly collect personal information from children under 13 because we do not collect personal information from any users.</p>
            <p>If you believe a third-party service integrated into this site has collected information improperly, please contact us.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in third party vendors.</p>
            
            <p>If you have any questions about this Privacy Policy, you may contact us at:</p>
            <p><Link href={"mailto:contact@custommade.games"}>contact@custommade.games</Link></p>
            </main>
        </Box>
    )
}

// Effective Date: [Insert Date]
// Website Name: [Your Website Name]
// Website URL: [YourDomain.com]

// 8. Your Privacy Rights

// Depending on your location, you may have rights under applicable privacy laws, including:

// The right to access personal information

// The right to request deletion

// The right to opt out of targeted advertising

// The right to request correction of inaccurate information

// Residents of certain jurisdictions (such as the European Economic Area, United Kingdom, or California) may have additional rights under GDPR or CCPA/CPRA.

// To exercise your rights, contact us at:
// [Insert Contact Email]

// 9. Third-Party Links

// Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.

// 10. Security

// We implement reasonable technical measures to protect information collected through our website. However, no method of transmission over the internet is completely secure.

// 11. Changes to This Policy

// We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.

// Continued use of the website after changes indicates acceptance of the updated policy.

// 12. Contact Information

