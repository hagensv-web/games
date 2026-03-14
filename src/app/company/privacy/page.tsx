import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/company/privacy"
  }
}

export default function PrivacyPage(){
    return (
        <Box sx={{ margin: { xs: "0 5%", md: "0 10% "}}}>
            <main>
            <Typography variant="h1">Privacy Policy</Typography>

            <Typography variant="body1">Effective Date: 2026-3-14</Typography>
            <Typography variant="body1">Website Name: CustomMade Games</Typography>
            <Typography variant="body1">Website URL: custommade.games</Typography>

            <Typography variant="h2">Introduction</Typography>
            <Typography variant="body1">This Privacy Policy explains how CustomMade Games (“we,” “us,” or “our”) collects, uses, and protects information when you use our website and browser-based game generators (the “Service”).</Typography>
            <Typography variant="body1">By using this website, you agree to the practices described in this policy.</Typography>

            <Typography variant="h2">Information We Collect</Typography>
            <Typography variant="h3">Personal Data</Typography>
            <Typography variant="body1">We do not require user accounts, collect names, email addresses, or contact details, store user-submitted content on our servers, maintain user profiles, or directly collect any personal information.</Typography>
            <Typography variant="body1">All game inputs are processed locally in your browser and are not transmitted to or stored by us.</Typography>

            <Typography variant="h3">Information Collected Automatically</Typography>
            <Typography variant="body1">Although we do not directly collect personal data, certain third party services used on this website may automatically collect information, including:</Typography>
            <ul>
                <li><Typography variant="body1">IP address</Typography></li>
                <li><Typography variant="body1">Browser type and version</Typography></li>
                <li><Typography variant="body1">Device type</Typography></li>
                <li><Typography variant="body1">Operating system</Typography></li>
                <li><Typography variant="body1">Pages visited</Typography></li>
                <li><Typography variant="body1">Time spent on pages</Typography></li>
                <li><Typography variant="body1">Referring website</Typography></li>
                <li><Typography variant="body1">General geographic location (city/region level)</Typography></li>
            </ul>
            <Typography variant="body1">This information is collected through analytics tools and advertising technologies and is not stored or controlled by us.</Typography>

            <Typography variant="h2">Analytics</Typography>
            <Typography variant="body1">We use Google Analytics to understand general website useage and improve the Service.</Typography>
            <Typography variant="body1">Google Analytics may collect information such as:</Typography>
            <ul>
                <li><Typography variant="body1">IP address</Typography></li>
                <li><Typography variant="body1">Device and browser information</Typography></li>
                <li><Typography variant="body1">Usage and interaction data</Typography></li>
            </ul>
            <Typography variant="body1">We do not access personally identifiable user profiles through Google Analytics</Typography>
            <Typography variant="body1">Google may use this data in accordance with its own Privacy Policy: <Link href={"https://policies.google.com/privacy"}>https://policies.google.com/privacy</Link></Typography>
            <Typography variant="body1">You can opt out of Google Analytics by visiting: <Link href={"https://tools.google.com/dlpage/gaoptout"}>https://tools.google.com/dlpage/gaoptout</Link></Typography>

            <Typography variant="h2">Advertising</Typography>
            <Typography variant="body1">We may display advertisements on our website through Google Ads (including Google AdSense), and/or other third-party advertising networks.</Typography>
            <Typography variant="body1">These advertising partners may use cookies or other tracking techologies to:</Typography>
            <ul>
                <li><Typography variant="body1">Deliver relevant advertisements</Typography></li>
                <li><Typography variant="body1">Measure ad performance</Typography></li>
                <li><Typography variant="body1">Personalize advertising content</Typography></li>
            </ul>
            <Typography variant="body1">We do not control how third-party advertising providers collect or use data. Their practices are governed by their respective privacy policies.</Typography>
            <Typography variant="body1">You can learn more about Google's advertising practices here:</Typography>
            <Typography variant="body1">https://policies.google.com/technologies/ads</Typography>
            <Typography variant="body1">You may opt out of personalized advertising by visiting:</Typography>
            <Typography variant="body1">https://www.google.com/settings/ads</Typography>

            <Typography variant="h2">Cookies</Typography>
            <Typography variant="body1">This website uses cookies primarily through third-party services for:</Typography>
            <ul>
                <li><Typography variant="body1">Analytics</Typography></li>
                <li><Typography variant="body1">Advertising</Typography></li>
                <li><Typography variant="body1">Basic functionalty</Typography></li>
            </ul>
            <Typography variant="body1">You may control or disable cookies through your browser settings. Disabling cookies may affect site functionality.</Typography>

            <Typography variant="h2">Data Storage</Typography>
            <Typography variant="body1">We do not maintain databases of user information.</Typography>
            <Typography variant="body1">All generators operate entirely in your browser. Any content create remains on your device unless you choose to share or export it.</Typography>

            <Typography variant="h2">Children's Privacy</Typography>
            <Typography variant="body1">This website is not directed at children under the age of 13. We cannot not knowingly collect personal information from children under 13 because we do not collect personal information from any users.</Typography>
            <Typography variant="body1">If you believe a third-party service integrated into this site has collected information improperly, please contact us.</Typography>

            <Typography variant="h2">Changes to This Policy</Typography>
            <Typography variant="body1">We may update this Privacy Policy from time to time to reflect changes in third party vendors.</Typography>
            
            <Typography variant="body1">If you have any questions about this Privacy Policy, you may contact us at: <Link href={"mailto:contact@custommade.games"}>contact@custommade.games</Link></Typography>
            </main>
        </Box>
    )
}