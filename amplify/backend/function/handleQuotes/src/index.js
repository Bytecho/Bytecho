// import { SendEmailCommand } = require("@aws-sdk/client-ses") ;
const { SendEmailCommand } = require("@aws-sdk/client-ses");
const { SESClient } = require("@aws-sdk/client-ses");
// Set the AWS Region.
const REGION = "ap-southeast-2";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });

// Import mjml
const mjml2html = require('mjml');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async(event) => {
    console.log(`Event: ${JSON.stringify(event)}`)
    const parsedBody = JSON.parse(event.body)

    const imgUrl = "https://deploy-preview-7--jocular-cucurucho-d4060f.netlify.app/images/Logo-contact.png";

    // Mail template for customers
    const mjmlTemplate = `
        <mjml>
            <mj-head>
                <mj-title>Your quote request</mj-title>
                <mj-font name="Quantico" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
                <mj-attributes>
                    <mj-text font-family="Quantico, sans-serif" />
                <mj-class name="phone" />
                </mj-attributes>
            </mj-head>
            <mj-body>
                <mj-section background-color="#262626">
                    <mj-column>
                        <mj-image src=${imgUrl} alt="Worldly logo" align="center" width="99px" padding="0"></mj-image>
                    </mj-column>
                </mj-section>
                <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px" >
                    <mj-text font-size="16px">Hello ${parsedBody.name} <br/><br/><br/></mj-text>
                    <mj-text font-size="16px">Thank you for contacting us at Bytecho. We have received your message and appreciate your interest in our services.<br/><br/></mj-text>
                    <mj-text font-size="16px">Our team will review your inquiry and get back to you as soon as possible. If you have any urgent matters, please feel free to contact us directly at 0400968140.<br/><br/></mj-text>
                    <mj-text font-size="16px">We look forward to the opportunity to serve you and provide exceptional cleaning solutions for your needs.<br/><br/><br/></mj-text>
                
                    <mj-text font-size="16px" >Best regards,<br/><br/></mj-text>
                    <mj-text font-size="16px" >Bennett Cleaning Services Team.<br/><br/></mj-text>
                    <mj-section padding-left="40px" padding-right="30px"> 
                        <mj-divider border-color="#FF9933" border-width="2px"></mj-divider>
                    </mj-section>
                    <mj-section padding="0">
                        <mj-wrapper padding="0" display="flex"  >
                            <mj-column mj-class="phone" vertical-align="middle">
                                <mj-text color="#262626" align="center">+61 400 968 140</mj-text>
                            </mj-column>
                            <mj-column vertical-align="middle">
                                <mj-text align="center">TAS - Australia</mj-text>
                            </mj-column>
                        </mj-wrapper>
                    </mj-section>
                </mj-section>
                    
            </mj-body>
        </mjml>
        `;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplate);

    const createSendEmailCommand = (toAddress, fromAddress) => {
        return new SendEmailCommand({
            Destination: {
                CcAddresses: [],
                ToAddresses: [
                    toAddress
                ]
            },
            Message: {
                Body: {
                    /* required */
                    Html: {
                      Charset: "UTF-8",
                      Data: html,
                    },
                    Text: {
                      Charset: "UTF-8",
                      Data: `The person ${parsedBody.name}`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: "Your quote request",
                },
            },
            Source: fromAddress
        })
    }
    
    const sendEmailCommand = createSendEmailCommand(
        `${parsedBody.email}`,
        "bytechodigital@gmail.com"
    );
    
    try {
        const result = await sesClient.send(sendEmailCommand)
        console.log(result);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
           },
           body: JSON.stringify({status: 200}),
        }
    } catch(e) {
        console.error(e)
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
}
