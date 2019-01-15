import React, { Component } from 'react'
import { Header, Table, Container, Menu, Grid } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars'
import { isBrowser } from 'react-device-detect'

import app from '../css/app.css'

export default class Developer extends Component {
  render () {
    const definitions = {
      user: 'Any customer or user of the platform and the app',
      marks:
        'All trademarks, service marks, logos, icons, trade names or ' +
        'stylisations used to identify the party, its products or services',
      policies:
        'All policies and requirements set forth on the Omniport website or ' +
        'portal or documentation',
      'user data':
        'Any data that users of the platform upload to or create on it',
      'confidential information':
        'If referring to the developer, the app confidential information and ' +
        'if referring to IMG, the Omniport confidential information',
      'Omniport confidential information':
        'Any code, inventions, know-how, user data, or business, technical ' +
        'or financial information that Omniport discloses to developers',
      'app confidential information':
        'Any information that the developer discloses to Omniport that a ' +
        'reasonable person would consider confidential under the circumstances'
    }

    return (
      <Scrollbars autoHide>
        <Container styleName='app.top-padded'>
          <Grid stackable>
            <Grid.Column width={4}>
              <Menu vertical fluid>
                <Menu.Item>
                  <Menu.Header>Developer terms of use</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#0'>Preamble</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#1'>OAuth2 applications</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name='use of the platform'
                      content='Use of the platform'
                      href='#1.1'
                    />
                    <Menu.Item
                      name='prohibited actions'
                      content='Prohibited actions'
                      href='#1.2'
                    />
                    <Menu.Item
                      name='platform usage'
                      content='Platform usage'
                      href='#1.3'
                    />
                    <Menu.Item
                      name='open source'
                      content='Open source'
                      href='#1.4'
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#2'>Security</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#3'>User data</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#4'>Other platforms and users</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#5'>Intellectual property</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name='omniport trademark license'
                      content='Omniport trademark license'
                      href='#5.1'
                    />
                    <Menu.Item
                      name='developer trademark license'
                      content='Developer trademark license'
                      href='#5.2'
                    />
                    <Menu.Item
                      name='reservation of rights'
                      content='Reservation of rights'
                      href='#5.3'
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#6'>Confidentiality</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#7'>Termination</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name='termination by img'
                      content='Termination by IMG'
                      href='#7.1'
                    />
                    <Menu.Item
                      name='termination by the developer'
                      content='Termination by the developer'
                      href='#7.2'
                    />
                    <Menu.Item
                      name='effect of termination'
                      content='Effect of termination'
                      href='#7.3'
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#8'>Warranties</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#9'>Indemnity</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#10'>Disclaimer</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#11'>Limitation of liability</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#12'>Modification</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#13'>Disputes</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#14'>Miscellaneous</Menu.Header>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header href='#15'>Definitions</Menu.Header>
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as='h3'>Omniport developer terms of use</Header>
              <Header as='h4' id='0'>
                &sect;0 Preamble
              </Header>
              <p>
                These Omniport developer terms of use (the "developer terms")
                are between the Information Managment Group ("IMG"), the
                individual or organisation managing the installation of Omniport
                in a given institution (the "local instance maintainers") and
                the individual or organisation (the "developer") agreeing to
                these terms.
              </p>
              <p>
                These terms govern the developer's access to and usage of
                services and products provided by IMG including APIs, SDKs,
                scripts, tokens, sessions, data, information and documentation
                (the "platform").
              </p>
              <p>
                By choosing to use one or more of the platform's features in
                your application (the "app"), the developer agrees to be bound
                to these terms as a developer. If the developer uses the
                platform on behalf of another individual or organisation, the
                developer must have the authority to bind that entity to these
                terms, otherwise cease the use of the platform and its features
                entirely.
              </p>
              <Header as='h4' id='1'>
                &sect;1 OAuth2 applications
              </Header>
              <Header as='h5' id='1.1'>
                &sect;1.1 Use of the platform
              </Header>
              <p>
                The developer will comply with all Omniport policies. The
                maintainers of the running instance of Omniport will, at their
                discretion, approve or deny any application submitted for
                review.
              </p>
              <Header as='h5' id='1.2'>
                &sect;1.2 Prohibited actions
              </Header>
              <p>The developer warrants that it will not (attempt to)</p>
              <ol>
                <li>
                  violate, encourage or facilitate the violation of Omniport's
                  acceptable use policy.
                </li>
                <li>
                  use or alter the portal, or any element thereof without
                  explicit consent from the maintainers.
                </li>
                <li>
                  mislead users to collect, alter, use or delete user data
                  without the explicit consent of the user.
                </li>
              </ol>
              <Header as='h5' id='1.3'>
                &sect;1.3 Platform usage
              </Header>
              <p>
                The maintainers in their infinite wisdom, may, in their own
                discretion, choose to
              </p>
              <ol>
                <li>
                  review and monitor the platform including detailed analytics
                  of various sections of the platform, but are not obligated to
                  do so. Omniport is not responsible for data and content
                  accessible via the platform.
                </li>
                <li>
                  restrict any developer's use of the platform. The developer
                  may reach out to the maintainers in case the restrictions are
                  not fair. However the developer is not to circumvent these
                  restrictions.
                </li>
                <li>
                  issue updates to the platform from time to time, not all of
                  which will be backwards compatible. Any applications using the
                  API endpoints may need to be reworked.
                </li>
              </ol>
              <Header as='h5' id='1.4'>
                &sect;1.4 Open-source
              </Header>
              <p>
                The platform and all of its services are open-source. The source
                code of these are accessible online. However there are a few
                components and apps of the platform that are not open-source and
                will never be. The developer must respect the licenses of all of
                these components.
              </p>
              <Header as='h4' id='2'>
                &sect;2 Security
              </Header>
              <p>
                To the extent the developer possesses or has access to any token
                issued by the platform, the developer must
              </p>
              <ol>
                <li>
                  prevent loss, theft, damage or unauthorised access to any bit
                  of user data and tokens using no less than the industry
                  standard security measures.
                </li>
                <li>
                  maintain a comprehensive security program based on reasonable
                  organizational, physical, and technical security controls.
                </li>
                <li>
                  use secure communication protocols such as SSL or TLS and
                  Hypertext Transfer Protocol Secure (HTTPS) enabled by default
                  for any data that is transmitted to and from the platform.
                </li>
                <li>
                  promptly report to the maintainer any known or suspected
                  security breach involving the platform and provide reasonable
                  assistance to the maintainers to patch the breach. n the event
                  of a security breach, prior to issuing any public statements
                  or responses to third party inquiries, the developer will work
                  in good faith with the maintainers to coordinate a statement
                  or response, unless prohibited by law.
                </li>
                <li>
                  require the user to be authenticated via the OAuth2 flow
                  before accessing the data.
                </li>
                <li>
                  not copy, use, or store any login credentials (including name,
                  email address, password, and access tokens) except as
                  necessary in connection with the initial user authentication;
                  provided that developer will only store login credentials
                  within the app and will promptly delete login credentials once
                  the user has completed the initial authentication.
                </li>
                <li>
                  not collect any login credentials from or allow users to input
                  any login credentials into any user interface other than the
                  platform login page, as described in the documentation.
                </li>
                <li>
                  not impersonate the Omniport login page in any way, not use a
                  custom login page as a proxy or use a layout or design
                  anywhere on your site that may lead the user to believe they
                  are on the platform.
                </li>
              </ol>
              <Header as='h4' id='3'>
                &sect;3 User data
              </Header>
              <p>The developer must</p>
              <ol>
                <li>
                  ensure that data is collected, used, processed, transmitted
                  and maintained in compliance with a privacy policy that is
                  made available to users and that clearly and accurately
                  describes the data that is collected and how it is used by the
                  developer and by any third party that is privy to this
                  information or any additional information generated from it.
                </li>
                <li>
                  notify the users of its responsibility in maintaining the
                  privacy, security and integrity of the data that is collected
                  or accessed by the developer.
                </li>
                <li>
                  never override the users' instructions, preferences or
                  authorisations in the use or disclosure of their data.
                </li>
              </ol>
              <Header as='h4' id='4'>
                &sect;4 Other platforms and users
              </Header>
              <p>The developer is responsible for</p>
              <ol>
                <li>
                  respecting the terms and conditions for all the platforms and
                  operating systems on which the app is distributed and used.
                </li>
                <li>
                  ensuring that all queries, complaints and feedback of the
                  users pertaining to the app is addressed by the developer and
                  is not targeted or redirected to the maintainers.
                </li>
                <li>
                  making it clear that the app, although integrated with the
                  platform is not a part of it and that the maintainers do not,
                  in any way, endorse or condone any action undertaken by the
                  app or the developer.
                </li>
              </ol>
              <Header as='h4' id='5'>
                &sect;5 Intellectual property
              </Header>
              <Header as='h5' id='5.1'>
                &sect;5.1 Omniport trademark license
              </Header>
              <p>
                The maintainers grant the developer a non-exclusive,
                non-transferable, non-sublicenseable, revocable license to use
                the Omniport marks solely to promote the app, provided that
                developer may not imply that the maintainers created, support,
                or endorse the app in any way pertaining to
                <em styleName='app.all-caps'> &sect;4</em>.
              </p>
              <p>
                This license is subject to these terms, applicable law, and the
                Omniport branding guide. All goodwill derived from the
                developer’s use of the Omniport marks will inure to the sole
                benefit of the platform.
              </p>
              <p>
                The developer also agrees not to contest or aid in contesting
                IMG's rights in, or the validity of, the Omniport marks.
              </p>
              <Header as='h5' id='5.2'>
                &sect;5.2 Developer trademark license
              </Header>
              <p>
                The developer must grant to the maintainers a non- exclusive,
                non-transferable license to use the app marks and descriptive
                materials that developer publishes about the app or the
                developer's use of the platform. This license is limited to the
                maintainers promoting their products or services and
                acknowledging or promoting developer's use of the platform.
              </p>
              <p>
                The license is subject to applicable law and any trademark usage
                guidelines that the developer provides to the maintainers,
                except to the extent the trademark usage guidelines require
                further permission for the uses described above or conflict with
                these terms.
              </p>
              <Header as='h5' id='5.3'>
                &sect;5.3 Reservation of rights
              </Header>
              <p>
                Omniport reserves all right, title and interest in the marks
                pertaining to the platform. Equivalently the developer reserves
                all right, title and interest pertaining to the app.
              </p>
              <p>
                Except as explicitly set forth herein, the terms do not grant
                anyone any right in another entity's marks or other intellectual
                property.
              </p>
              <Header as='h4' id='6'>
                &sect;6 Confidentiality
              </Header>
              <p>
                The maintainers and the developer may disclose confidential
                information to each other. The receiving party may use the
                disclosing party’s confidential information only to exercise its
                rights and perform its obligations under these terms.
              </p>
              <p>
                The receiving party must use a reasonable degree of care to
                protect confidential information. The receiving party will not
                disclose confidential information to any third party except to
                its employees, agents, or third party contractors who need to
                know it and if they are bound by terms at least as restrictive
                as those in these terms.
              </p>
              <p>
                Confidentiality obligations do not apply to the extent the
                information
              </p>
              <ol>
                <li>
                  was known to the receiving party without restriction before
                  receipt from the disclosing party
                </li>
                <li>
                  is publicly available through no fault of the receiving party
                </li>
                <li>
                  is rightfully received by the receiving party from a third
                  party without a duty of confidentiality
                </li>
                <li>
                  is independently developed by the receiving party without
                  access to Confidential Information.
                </li>
              </ol>
              <p>
                A party may disclose confidential information to the extent it
                is compelled to do so by law if it provides reasonable prior
                notice to the other party, unless a court orders that the other
                party not be given notice. Upon written request, the receiving
                party will promptly return all confidential information and
                copies to the receiving party, or certify in writing that it has
                destroyed all such materials. Breach of this section could cause
                the disclosing party irreparable harm, and the disclosing party
                may seek immediate equitable relief, in addition to other rights
                and remedies it may have.
              </p>
              <Header as='h4' id='7'>
                &sect;7 Termination
              </Header>
              <p>
                These terms will remain in force unless terminated as stipulated
                in the subsections below.
              </p>
              <Header as='h5' id='7.1'>
                &sect;7.1 Termination by IMG
              </Header>
              <p>
                IMG may terminate these terms or suspend developer’s access to
                all or any part of the platform
              </p>
              <ol>
                <li>
                  if the developer is in material breach of these terms and
                  fails to cure that breach within 30 days after receipt of
                  written notice.
                </li>
                <li>
                  if IMG is required to do so by the law of the land or by
                  ethical and moral principles.
                </li>
                <li>
                  if ING ceases to offer any products or services covered by
                  these terms.
                </li>
                <li>
                  if IMG determines or has reason to believe the developer or
                  the app may cause harm or loss to the platforn or to any of
                  the platform's users, or the developer or the app is or will
                  be a threat to to the platforn or to any of the platform's
                  users.
                </li>
                <li>
                  for any other reason with 30 days prior written notice to the
                  developer.
                </li>
                <li>
                  in order to assess or address any imminent or potential
                  security threat.
                </li>
              </ol>
              <Header as='h5' id='7.2'>
                &sect;7.2 Termination by the developer
              </Header>
              <p>
                The developer may terminate these yerms at any time by ceasing
                all use of the platform (including use by the apps) and by
                either
              </p>
              <ol>
                <li>
                  deleting the app if the developer is the sole developer.
                </li>
                <li>leaving the team if there are others on the app team.</li>
              </ol>
              <p>
                Leaving the app running without any active member left on the
                team does <em>not</em> constitute termination on part of the
                developer because the app will still be active and will be under
                the responsibility of the developer.
              </p>
              <Header as='h5' id='7.3'>
                &sect;7.3 Effect of termination
              </Header>
              <p>If these terms are terminated</p>
              <ol>
                <li>
                  the rights granted by IMG to the developer will cease
                  immediately.
                </li>
                <li>
                  the developer will cease all use, operation, support,
                  promotion, and distribution of the the app and the platform.
                </li>
                <li>
                  the developer may lose all access to any content, material or
                  information that the developer has provided to IMG regarding
                  the app or the platform.
                </li>
              </ol>
              <p>
                The following terms will survive the termination of the
                agreement
                <br />
                <em styleName='app.all-caps'>
                  &sect;1.2, &sect;1.3, &sect;3, &sect;5 - &sect;15
                </em>
              </p>
              <Header as='h4' id='8'>
                &sect;8 Warranties
              </Header>
              <p>The developer represents and warrants that</p>
              <ol>
                <li>
                  all information that the developer provides to the maintainers
                  is true, accurate and complete.
                </li>
                <li>
                  the developer has the full right, power and authority to make,
                  distribute and operate the app, use the platform and to enter
                  into these terms.
                </li>
                <li>
                  the developer, the app, its use and its use of the platform
                  will not violate the intellectual property rights, or other
                  rights of others, or violate any laws.
                </li>
              </ol>
              <Header as='h4' id='9'>
                &sect;9 Indemnity
              </Header>
              <p>
                The developer will indemnify, defend and hold Dropbox and its
                affiliates harmless from all costs and expenses arising from any
                third party claim relating to any breach or omission on the
                developer's part in upholding these terms.
              </p>
              <Header as='h4' id='10'>
                &sect;10 Disclaimer
              </Header>
              <p styleName='app.all-caps'>
                The Omniport service, platform and software are provided "as
                is", at your own risk, without express or implied warranty or
                condition of any kind. IMG and the local instance maintainers
                disclaim any warranties of title, merchantability, fitness for a
                particular purpose or non-infringement.
              </p>
              <Header as='h4' id='11'>
                &sect;11 Limitation of liability
              </Header>
              <p styleName='app.all-caps'>
                To the fullest extent permitted by law, in no event will
                Omniport, IMG, the local instance maintainers, their affiliates,
                or agents be liable for
              </p>
              <ol styleName='app.all-caps'>
                <li>
                  any indirect, special, incidental, punitive, exemplary or
                  consequential (including loss of data, use, business or
                  profits) damages, regardless of legal theory.
                </li>
                <li>
                  loss of data, use, business or profits (in each case whether
                  direct or indirect) even if IMG and the local instance
                  maintainers knew or should have known of the possibility of
                  such damages.
                </li>
              </ol>
              <p styleName='app.all-caps'>
                To the fullest extent permitted by law, the maximum liability of
                aggregate liability of all aforementioned parties will not
                exceed 0<em> (zero, zilch, nada, nil)</em> in the currency of
                your choice.
              </p>
              <Header as='h4' id='12'>
                &sect;12 Modification
              </Header>
              <p>
                IMG may revise these terms from time to time. If, in the
                maintainers' sole discretion, a revision is material, they will
                notify the developer by emailing the email address associated
                with the developer's account. In the event of a material
                revision, if developer does not agree to the revised terms, it
                may terminate the terms within 30 days of receiving notice of
                the revision. If a revision is not material, the maintainers
                will post the revised terms on its website, and the developer is
                responsible for checking these postings regularly. By continuing
                to access or use the platform after revisions become effective,
                developer agrees to be bound by the revised terms.
              </p>
              <Header as='h4' id='13'>
                &sect;13 Disputes
              </Header>
              <p>
                None of the parties on the side on IMG including, but not
                limited to, affiliates, agents and local instance maintainers
                will ever indulge a dispute unless explicitly expressing an
                intention to do so which has about the same chance as a snowball
                in hell given that IMG is a student organisation running an
                awesome non-profit project to make every college on a planet a
                technology-enhanced place.
              </p>
              <Header as='h4' id='14'>
                &sect;14 Miscellaneous
              </Header>
              <p>
                These developer terms constitute the entire and exclusive
                agreement between the developer and IMG with respect to the
                platform, and supersede and replace any prior or contemporary
                agreements, terms, and conditions applicable to the platform.
                These terms do not create third-party beneficiary rights. IMG's
                failure to ensure a provision is not a waiver of its right to do
                so later.
              </p>
              <p>
                IMG and the developer are not partners, affiliates or agents but
                the relationship is deemed to be that of independent
                contractors.
              </p>
              <p>
                Notices to IMG are to be sent via email, courier or mail and are
                deemed given when received. Notices to the developer are to be
                sent via email, courier or mail are and deemed given when sent.
              </p>
              <p>IMG can be reached at</p>
              <p styleName='app.all-caps'>
                Information Management Group,
                <br />
                Institute Computer Centre,
                <br />
                Indian Institute of Technology Roorkee,
                <br />
                Roorkee - 247667, Haridwar District,
                <br />
                Uttarakhand, India (IN)
                <br />
                attn.: Chief coordinators
              </p>
              <Header as='h4' id='15'>
                &sect;15 Definitions
              </Header>
              <p>
                In addition to the definitions in the
                <em styleName='app.all-caps'> &sect;0 </em>
                of the terms, the following definitions are to be understood in
                context of the terms expressed above.
              </p>
              <Table celled stackable>
                {isBrowser && (
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Terms</Table.HeaderCell>
                      <Table.HeaderCell>Definition</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                )}
                <Table.Body>
                  {Object.entries(definitions).map(([key, value]) => {
                    return (
                      <Table.Row key={key}>
                        <Table.Cell>{key}</Table.Cell>
                        <Table.Cell>{value}</Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Container>
      </Scrollbars>
    )
  }
}
