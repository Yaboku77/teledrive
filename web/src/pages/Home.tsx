import { ArrowRightOutlined, CloudOutlined, DollarCircleOutlined, SecurityScanOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Form, Input, Layout, message, Row, Space, Tooltip, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import GitHubButton from 'react-github-btn'
import { Follow, Tweet } from 'react-twitter-widgets'
import useSWRImmutable from 'swr/immutable'
import { fetcher, req } from '../utils/Fetcher'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ReactComponent as UploadingAnimate } from '../Uploading-amico.svg'

const Home: React.FC = () => {
  const { data } = useSWRImmutable('/github/contributors', fetcher)
  const [form] = useForm()
  const { data: me } = useSWRImmutable('/users/me', fetcher)

  const submit = async () => {
    const { email } = form.getFieldsValue()
    try {
      await req.post('/waitings', { email })
      form.resetFields()
      return message.success(`${email} successfully joined in the waiting list.`)
    } catch (error) {
      return message.error('Something error! Please try again a few moments.')
    }
  }

  return <div id="top">
    <Navbar user={me} page="home" />
    <Layout.Content style={{ fontSize: '1.125rem' }}>
      <Row align="middle" style={{ marginTop: '50px' }}>
        <Col lg={{ span: 10, offset: 2 }} md={{ span: 20, offset: 2 }} span={22} offset={1}>
          <Layout.Content>
            <Typography.Title level={1}>
              <Typography.Text style={{ fontWeight: 'lighter' }}>
                The Free Unlimited
              </Typography.Text>
              <br style={{ 'lineHeight': 1.5 }} />
              <Typography.Text style={{ background: '#0088CC', color: '#fff' }}>
                &nbsp; Cloud Storage &nbsp;
              </Typography.Text>
            </Typography.Title>
            <Typography.Paragraph style={{ marginTop: '30px' }}>
              The open source project to give you what you deserve.
              Using the <strong>Telegram API</strong> as your unlimited storage.
              So, you can upload as many as you want without any limit 👌
            </Typography.Paragraph>
            <Typography.Paragraph>
              {/* <a href="https://www.producthunt.com/posts/teledrive?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-teledrive" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315149&theme=light" alt="TeleDrive - Free unlimited cloud storage service using the Telegram API | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a> */}
              <a href="https://www.producthunt.com/posts/teledrive?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-teledrive" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=315149&theme=light&period=daily" alt="TeleDrive - Free unlimited cloud storage service using the Telegram API | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Space>
                <Follow username="teledriveapp" options={{ dnt: true }} />
                <GitHubButton href="https://github.com/mgilangjanuar/teledrive" data-show-count="true" aria-label="Star mgilangjanuar/teledrive on GitHub">Star</GitHubButton>
              </Space>
            </Typography.Paragraph>
            <Layout.Content style={{ marginTop: '40px' }}>
              {me ? <Button shape="round" size="large" type="primary" href="/dashboard">Go to Dashboard <ArrowRightOutlined /></Button> : <Form form={form} layout="inline" onFinish={submit}>
                <Form.Item name="email" rules={[{ required: true, message: 'Email is required' }]}>
                  <Input size="large" style={{ width: '143px' }} type="email" placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Button size="large" htmlType="submit" type="primary">
                    Get Early Access
                  </Button>
                </Form.Item>
              </Form>}
            </Layout.Content>
          </Layout.Content>
        </Col>
        <Col lg={{ span: 10 }} span={24} style={{ textAlign: 'center', marginTop: '50px' }}>
          <Layout.Content>
            <UploadingAnimate style={{ width: '100%', maxWidth: '640px' }} />
            {/* <img style={{ width: '100%', maxWidth: '640px' }} src="./uploading-animate.svg" alt="Online illustrations by Storyset" /> */}
          </Layout.Content>
        </Col>
      </Row>

      <Row style={{ marginTop: '100px', padding: '100px 0', background: '#f0f2f5' }}>
        <Col lg={14} span={20} offset={2}>
          <Typography.Title level={2}>Want to know why we can do this?</Typography.Title>
          <Typography.Paragraph style={{ marginBottom: '50px' }}>
            In Aug 20, 2021, <a href="https://telegram.org/">Telegram</a> said that they give an unlimited cloud storage for free via their official <a href="https://twitter.com/telegram/status/1428703364737507332" target="_blank">Twitter account</a>.
            So, we're using their API to build <strong>TeleDrive</strong> 🚀
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Tweet options={{ width: 360 }} tweetId="1428703364737507332" />
          </Typography.Paragraph>
        </Col>
      </Row>

      <Row style={{ marginTop: '100px', padding: '50px 0' }}>
        <Col span={20} offset={2}>
          <Row gutter={72}>
            <Col lg={8} span={24} style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '2em', color: '#0088CC' }}>
                <DollarCircleOutlined />
              </div>
              <Typography.Title style={{ fontWeight: 'lighter' }}>Free</Typography.Title>
              <Typography.Paragraph>
                Seriously, you can use this service FREE with no limit. Everyone can even do a self-hosted for TeleDrive.
              </Typography.Paragraph>
            </Col>
            <Col lg={8} span={24} style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '2em', color: '#0088CC' }}>
                <CloudOutlined />
              </div>
              <Typography.Title style={{ fontWeight: 'lighter' }}>Unlimited</Typography.Title>
              <Typography.Paragraph>
                Because Telegram promises us to give the unlimited cloud storage from their <a href="https://twitter.com/telegram/status/1428703364737507332" target="_blank">tweet</a>. So, here we go 🚀
              </Typography.Paragraph>
            </Col>
            <Col lg={8} span={24} style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontSize: '2em', color: '#0088CC' }}>
                <SecurityScanOutlined />
              </div>
              <Typography.Title style={{ fontWeight: 'lighter' }}>Secure</Typography.Title>
              <Typography.Paragraph>
                You can control the sharing options for every file that you upload on TeleDrive. By default, it's private for you.
              </Typography.Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: '100px', padding: '100px 0', background: '#f0f2f5' }}>
        <Col span={20} offset={2}>
          <Row gutter={72}>
            <Col lg={12} span={24} style={{ textAlign: 'right', marginBottom: '30px' }}>
              <Typography.Title level={2} style={{ marginBottom: '30px' }}>Our Contributors</Typography.Title>
              <Typography.Paragraph style={{ marginBottom: '20px' }}>
                <Space wrap>
                  {data?.contributors?.map((contributor: any) => <Tooltip placement="bottom" title={contributor.login} key={contributor.id}>
                    <a href={contributor.html_url} target="_blank">
                      <Avatar size="large" src={contributor.avatar_url} />
                    </a>
                  </Tooltip>)}
                </Space>
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Space>
                  <GitHubButton href="https://github.com/mgilangjanuar/teledrive/fork" data-size="large" data-show-count="true" aria-label="Fork mgilangjanuar/teledrive on GitHub">Fork</GitHubButton>
                  <GitHubButton href="https://github.com/mgilangjanuar/teledrive" data-size="large" data-show-count="true" aria-label="Star mgilangjanuar/teledrive on GitHub">Star</GitHubButton>
                </Space>
              </Typography.Paragraph>
            </Col>
            <Col lg={12} span={24} style={{ textAlign: 'left', marginBottom: '30px' }}>
              <Typography.Title level={2} style={{ marginBottom: '30px' }}>Our Sponsor</Typography.Title>
              <Typography.Paragraph style={{ marginBottom: '20px' }}>
                <Space wrap>
                  <Tooltip placement="bottom" title="Bahasa.ai - Chatbot Which Serves Customers Fully" key="bahasa-ai">
                    <a href="https://bahasa.ai" target="_blank">
                      <img style={{ width: '100%', maxWidth: '212px' }} src="https://uploads-ssl.webflow.com/5fb8f118741e70818f103554/5feefbc08ef40333bbd2f92e_bahasa-ai-logo-blue%20(2021)%404x-p-500.png" />
                    </a>
                  </Tooltip>
                </Space>
              </Typography.Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: '50px', padding: '50px 0 100px', textAlign: 'center' }}>
        <Col lg={{ span: 6, offset: 9 }} md={{ span: 10, offset: 7 }} span={20} offset={2}>
          <Typography.Paragraph>
            Join the waiting list now! 🚀
          </Typography.Paragraph>
          <Button shape="round" block href="#top" size="large" type="primary">
            Getting Started
          </Button>
        </Col>
      </Row>

    </Layout.Content>
    <Footer />
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="mgilangjanuar" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
  </div>
}

export default Home