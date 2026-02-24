import React from 'react';
import { LinkTab } from '../components/Link/LinkTab';
import { tabs } from '../constants/constants';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <LinkTab title={tab.title} id={tab.id} />
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {(!tabId || !tabs.some(tab => tab.id === tabId)) &&
          'Please select a tab'}
        {tabId && tabs.find(tab => tabId === tab.id)?.content}
      </div>
    </>
  );
};
