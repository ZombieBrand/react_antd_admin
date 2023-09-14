import { Col, Row } from 'antd'
import ThemeSwitch from './ThemeSwitch'
export default function NavHeader() {
  return (
    <div>
      <Row justify="end" align="middle" wrap={false}>
        <Col>
          <ThemeSwitch />
        </Col>
      </Row>
    </div>
  )
}
