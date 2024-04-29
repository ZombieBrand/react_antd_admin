import { Divider, Typography, Row, Col, Image } from 'antd'

const { Link } = Typography
const Home = () => {
  const imageModules = import.meta.glob('../../assets/ServiceLogos/**/*.png', { import: 'default', eager: true, query: '?url' })
  const images = Object.values(imageModules).map(mod => mod) as string[]
  console.log({ images })
  return (
    <Typography>
      <Link className='text-2xl' href='https://github.com/SAWARATSUKI/ServiceLogos'>
        好看的logo
      </Link>
      <Divider></Divider>
      <Row align='middle' gutter={16}>
        {images.map((image, index) => (
          <Col key={index} span={4}>
            <Image src={image} />
          </Col>
        ))}
      </Row>
    </Typography>
  )
}

export default Home
