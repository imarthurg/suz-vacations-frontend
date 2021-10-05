import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../theme';

const BaseSidebar = ({ className }: any) => {
  return <div className={className}></div>;
};

const Sidebar = styled(BaseSidebar)`
  background-color: ${COLORS.secondary};
  min-height: 100vh;
  width: 15%;
  max-width: 300px;
  padding: 15px;
`;

const BaseDashboard = ({ className, children }: any) => {
  return (
    <div className={className}>
      <Sidebar />
      <div className="content">
        <h1 className="title">Agendamento de férias</h1>
        {children}
      </div>
    </div>
  );
};

const Dashboard = styled(BaseDashboard)`
  display: flex;
  background-color: ${COLORS.dark};
  min-height: 100vh;

  .content {
    padding: 15px 30px;
    flex: 1;
  }

  .content .title {
    color: ${COLORS.primary};
    margin-bottom: 30px;
  }
`;

export default Dashboard;
