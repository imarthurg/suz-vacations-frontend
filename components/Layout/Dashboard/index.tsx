import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ZRPBirdImage from '../../../public/zrpbird.png';
import { COLORS } from '../../../theme';
import useDashboardConfigStore from '../../../store/dashboard-config.store';
import Button from '../../Button';
import useAuthStore from '../../../store/auth.store';

const Sidebar = styled(({ className }: any) => {
  const { logout }: any = useAuthStore();
  const { menuItems, selectedModule, navigateToModule }: any =
    useDashboardConfigStore();
  const router = useRouter();

  const handleNavItemClick = (path: string) => {
    navigateToModule(path);
    router.push(path);
  };

  return (
    <div className={className}>
      <a
        onClick={() => {
          handleNavItemClick('/');
        }}
      >
        <h1 className="module-name">SUZ</h1>
      </a>
      <div className="module-sticker">
        <Image
          src={selectedModule?.sticker || ZRPBirdImage}
          alt={selectedModule?.stickerImgAlt || 'Pássaro da ZRP'}
        />
      </div>
      <nav>
        <ul className="menu">
          {menuItems.map(({ name, path }: any) => (
            <li key={name} className="menu-item">
              <button
                className="menu-item-button"
                onClick={() => handleNavItemClick(path)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">
        <Button
          title="Sair"
          handleClick={() => {
            logout();
            router.push('login');
          }}
          outline
        />
      </div>
    </div>
  );
})`
  background-color: ${COLORS.secondary};
  min-height: 100vh;
  width: 15%;
  max-width: 300px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  a {
    cursor: pointer;
  }

  .module-name {
    color: ${COLORS.primary};
    text-align: center;
    margin-bottom: 30px;
  }

  .module-sticker {
    text-align: center;
  }

  .menu {
    margin-top: 30px;
    padding: 0;
    list-style: none;
  }

  .menu-item {
    width: 100%;
  }

  .menu-item-button {
    width: 100%;
    background-color: transparent;
    color: ${COLORS.primary};
    border: none;
    transition: all 0.1s ease;
    text-align: left;
    padding: 10px 15px;
  }

  .menu-item-button:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    padding-bottom: 30px;
  }
`;

const Dashboard = styled(({ className, children }: any) => {
  const { selectedModule }: any = useDashboardConfigStore();

  return (
    <div className={className}>
      <Sidebar />
      <div className="content">
        <h1 className="title">
          {selectedModule?.name || 'Bem vindo ao Sistema Unificado ZRP :)'}
        </h1>
        {children}
      </div>
    </div>
  );
})`
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
