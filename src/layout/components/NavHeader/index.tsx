import { Col, Row } from 'antd'
import ThemeSwitch from './ThemeSwitch'
export default function NavHeader() {
  return (
    <div className="border-2 border-solid border-indigo-600">
      <Row justify="end" align="middle" wrap={false}>
        <Col>
          <ThemeSwitch />
        </Col>
      </Row>
    </div>
  )
}
