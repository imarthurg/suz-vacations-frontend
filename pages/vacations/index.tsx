import { Col, Container, Row } from 'react-bootstrap';

import Dashboard from '../../components/Layout/Dashboard';
import Card from '../../components/Layout/Card';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import Space from '../../components/Layout/Space';
import UserVacationsOverview from '../../components/UserVacationsOverview';
import Table from '../../components/Table';

const Vacations = () => {
  return (
    <Dashboard>
      <Container fluid>
        <Row>
          <Col>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Paragraph align="center" style={{ maxWidth: 300 }}>
                  Agende suas férias aqui. Lembre-se de agendar com 2 meses de
                  antecedência, e considerar o período de férias coletivas
                </Paragraph>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto">
                <Button title="agendar férias" handleClick={null} />
              </Col>
            </Row>

            <Space times={2} />

            <UserVacationsOverview />
          </Col>

          <Col>
            <Row>
              <Col>
                <Card title="solicitações em análise">
                  <Table
                    tableData={{
                      columns: ['período requisitado', 'dias totais'],
                      data: [
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                      ],
                    }}
                  />
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card title="saldo" darken center>
                  <Paragraph align="center">
                    quanto de férias você ainda tem
                  </Paragraph>
                  <Paragraph align="center">
                    <b>x dias</b>
                  </Paragraph>
                </Card>
              </Col>
              <Col>
                <Card title="prazo" darken center>
                  <Paragraph align="center">
                    tirar período de férias até
                  </Paragraph>
                  <Paragraph align="center">
                    <b>xx/xx/xxxx</b>
                  </Paragraph>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card title="férias cumpridas">
                  <Table
                    tableData={{
                      columns: ['período requisitado', 'dias totais'],
                      data: [
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                        ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
                      ],
                    }}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
};

export default Vacations;
