import { useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import Card from '../Layout/Card';
import { COLORS } from '../../theme';
import Paragraph from '../Paragraph';

const renderVacationsData = (data: Array<{ days: number; period: string }>) => {
  return data.map(({ days, period }, index) => (
    <Paragraph key={index}>
      {days} dia(s)
      <br />
      {period}
    </Paragraph>
  ));
};

const UserVacationsOverview = styled(({ className }) => {
  const [scheduledVacations, setScheduledVacations] = useState([
    { days: 10, period: 'xx/xx/xxxx - xx/xx/xxxx' },
    { days: 10, period: 'xx/xx/xxxx - xx/xx/xxxx' },
  ]);

  const [runningVacations, setRunningVacations] = useState([
    { days: 10, period: 'xx/xx/xxxx - xx/xx/xxxx' },
  ]);

  return (
    <div className={className}>
      <Card title="minhas férias">
        <Row>
          <Col>
            <p className="section-title">férias agendadas</p>
            {renderVacationsData(scheduledVacations)}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="section-title">férias rolando</p>
            {renderVacationsData(runningVacations)}
          </Col>
        </Row>
      </Card>
    </div>
  );
})`
  .section-title {
    font-size: 13px;
    color: ${COLORS.white};
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export default UserVacationsOverview;
