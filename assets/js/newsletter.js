function myfunc() {
    // alert(document.getElementById("email").value);
    var email_id = document.getElementById("email").value;
    Email.send({
        Host: "smtp.mailgun.org",
        Username: "postmaster@mailer.innovativescripts.com",
        Password: "759011763176a662b5c34d897094297c-aff8aa95-6815ee32",
        To: `${email_id}`,
        From: "noreply@innovativescripts.com",
        Subject: "Thank You For Subscribing",
        Body: `
        <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }

        table,
        td,
        tr {
            vertical-align: top;
            border-collapse: collapse;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
        }
    </style>
    <style id="media-query" type="text/css">
        @media (max-width: 670px) {

            .block-grid,
            .col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .block-grid {
                width: 100% !important;
            }

            .col {
                width: 100% !important;
            }

            .col>div {
                margin: 0 auto;
            }

            img.fullwidth,
            img.fullwidthOnMobile {
                max-width: 100% !important;
            }

            .no-stack .col {
                min-width: 0 !important;
                display: table-cell !important;
            }

            .no-stack.two-up .col {
                width: 50% !important;
            }

            .no-stack .col.num4 {
                width: 33% !important;
            }

            .no-stack .col.num8 {
                width: 66% !important;
            }

            .no-stack .col.num4 {
                width: 33% !important;
            }

            .no-stack .col.num3 {
                width: 25% !important;
            }

            .no-stack .col.num6 {
                width: 50% !important;
            }

            .no-stack .col.num9 {
                width: 75% !important;
            }

            .video-block {
                max-width: none !important;
            }

            .mobile_hide {
                min-height: 0px;
                max-height: 0px;
                max-width: 0px;
                display: none;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide {
                display: block !important;
                max-height: none !important;
            }
        }
    </style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #F6F5FF;">
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table bgcolor="#F6F5FF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
        style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F5FF; width: 100%;"
        valign="top" width="100%">
        <tbody>
            <tr style="vertical-align: top;" valign="top">
                <td style="word-break: break-word; vertical-align: top;" valign="top">
                    <div style="background-color:transparent;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <table border="0" cellpadding="0" cellspacing="0" class="divider"
                                                role="presentation"
                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                valign="top" width="100%">
                                                <tbody>
                                                    <tr style="vertical-align: top;" valign="top">
                                                        <td class="divider_inner"
                                                            style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                                            valign="top">
                                                            <table align="center" border="0" cellpadding="0"
                                                                cellspacing="0" class="divider_content" height="0"
                                                                role="presentation"
                                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;"
                                                                valign="top" width="100%">
                                                                <tbody>
                                                                    <tr style="vertical-align: top;" valign="top">
                                                                        <td height="0"
                                                                            style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                            valign="top"><span></span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="background-color:transparent;">
                        <div class="block-grid two-up no-stack"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num6"
                                    style="min-width: 320px; max-width: 325px; display: table-cell; vertical-align: top; width: 325px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:7px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <div align="left" class="img-container left fixedwidth"
                                                style="padding-right: 0px;padding-left: 10px;">

                                            </div>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <div class="col num6"
                                    style="min-width: 320px; max-width: 325px; display: table-cell; vertical-align: top; width: 325px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 15px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="social_icons"
                                                role="presentation"
                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                valign="top" width="100%">
                                                <tbody>
                                                    <tr style="vertical-align: top;" valign="top">
                                                        <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                                            valign="top">
                                                            <table activate="activate" align="right"
                                                                alignment="alignment" cellpadding="0" cellspacing="0"
                                                                class="social_table" role="presentation"
                                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: undefined; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;"
                                                                to="to" valign="top">
                                                                <tbody>
                                                                    <tr align="right"
                                                                        style="vertical-align: top; display: inline-block; text-align: right;"
                                                                        valign="top">
                                                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 5px;"
                                                                            valign="top"><a
                                                                                href="https://www.instagram.com/isplgroup"
                                                                                target="_blank"><img alt="Instagram"
                                                                                    height="32"
                                                                                    src="https://raw.githubusercontent.com/iamkumarji/PicsRandom/master/instagram%402x.png"
                                                                                    style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"
                                                                                    title="Instagram" width="32" /></a>
                                                                        </td>
                                                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 5px;"
                                                                            valign="top"><a
                                                                                href="https://www.facebook.com/"
                                                                                target="_blank"><img alt="Facebook"
                                                                                    height="32"
                                                                                    src="https://raw.githubusercontent.com/iamkumarji/PicsRandom/master/facebook%402x.png"
                                                                                    style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"
                                                                                    title="Facebook" width="32" /></a>
                                                                        </td>
                                                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 5px;"
                                                                            valign="top"><a
                                                                                href="https://twitter.com/isplgroup"
                                                                                target="_blank"><img alt="Twitter"
                                                                                    height="32"
                                                                                    src="https://raw.githubusercontent.com/iamkumarji/PicsRandom/master/twitter%402x.png"
                                                                                    style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"
                                                                                    title="Twitter" width="32" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="background-color:transparent;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <table border="0" cellpadding="0" cellspacing="0" class="divider"
                                                role="presentation"
                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                valign="top" width="100%">
                                                <tbody>
                                                    <tr style="vertical-align: top;" valign="top">
                                                        <td class="divider_inner"
                                                            style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
                                                            valign="top">
                                                            <table align="center" border="0" cellpadding="0"
                                                                cellspacing="0" class="divider_content" height="0"
                                                                role="presentation"
                                                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;"
                                                                valign="top" width="100%">
                                                                <tbody>
                                                                    <tr style="vertical-align: top;" valign="top">
                                                                        <td height="0"
                                                                            style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                            valign="top"><span></span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="background-color:transparent;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <div align="center" class="img-container center autowidth fullwidth">

                                            </div>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="background-color:transparent;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;">
                            <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">

                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:10px; padding-right: 30px; padding-left: 30px;">
                                            <!--<![endif]-->
                                            <div
                                                style="color:#7A6FE9;font-family:'Open Sans', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
                                                <div
                                                    style="font-size: 16px; line-height: 1.2; font-family: 'Open Sans', Helvetica, Arial, sans-serif; color: #7A6FE9; mso-line-height-alt: 19px;">
                                                    <p
                                                        style="font-size: 16px; line-height: 1.2; text-align: center; mso-line-height-alt: 19px; margin: 0;">
                                                        <strong><span style="font-size: 20px;">INNOVATIVE
                                                                SCRIPTS</span></strong></p>
                                                </div>
                                            </div>
                                            <div
                                                style="color:#454562;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:0px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
                                                <div
                                                    style="line-height: 1.2; font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #454562; mso-line-height-alt: 14px;">
                                                    <p
                                                        style="line-height: 1.2; text-align: center; font-size: 38px; mso-line-height-alt: 46px; margin: 0;">
                                                        <span style="font-size: 38px;">Empowered by Innovation.</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style="background-color:transparent;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
                                            <!--<![endif]-->
                                            <div align="center" class="img-container center autowidth fullwidth"
                                                style="padding-right: 0px;padding-left: 0px;">
                                                <img align="center" alt="I'm an image" border="0"
                                                    class="center autowidth fullwidth" src="https://raw.githubusercontent.com/iamkumarji/PicsRandom/master/3.png"
                                                    style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 650px; display: block;"
                                                    title="I'm an image" width="650" />
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </div>
                                            <div
                                                style="color:#555555;font-family:'Open Sans', Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
                                                <div
                                                    style="font-size: 14px; line-height: 1.5; font-family: 'Open Sans', Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 21px;">
                                                    <p style="font-size: 30px; text-align: center; font-weight: bold;">
                                                        Thank You For Subscribing!</p>
                                                    <p
                                                        style="font-size: 18px; line-height: 1.5; text-align: justify; mso-line-height-alt: 21px; margin: 0;">
                                                        Hi there, <br>
                                                        Now, you'll always be in-the-know about the latest technologies
                                                        and trends in IT-sector. <br>
                                                        You'll also get to know about our latest service and
                                                        achievements.<br>
                                                        Plus, you'll be the first to know about our exclusive promotions
                                                        & offers.
                                                        <br><br>
                                                        Don't worry we'll not going to spam you! <br>

                                                        Thank you again for exploring us. Have a Great Day!.


                                                    </p>
                                                </div>
                                            </div>

                                            <div align="center" class="button-container"
                                                style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    </div>

                    </div>
                    </div>
                    </div>



                    <div style="background-color:#FFFFFF;">
                        <div class="block-grid"
                            style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12"
                                    style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;">
                                    <div style="width:100% !important;">
                                        <div
                                            style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 20px; padding-left: 20px;">
                                            <!--<![endif]-->
                                            <div
                                                style="color:#6B6B6B;font-family:'Open Sans', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                <div
                                                    style="font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.2; color: #6B6B6B; mso-line-height-alt: 14px;">
                                                    <p
                                                        style="font-size: 14px; line-height: 1.2; text-align: center; mso-line-height-alt: 17px; margin: 0;">
                                                        All rights reserved by ISPL<br />Made with <span
                                                            style="font-size: 14px; color: #c059ff;">❤</span> <br><br><a
                                                            href="innovativescripts.com">Click to unsubscribe.</a>
                                                    </p>
                                                    <br>
                                                </div>

                                            </div>

                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`
    })
    alert("success");

};