/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Col, Collapse, Row, Checkbox, Tag } from 'antd';
import { images } from 'variables/images';
import PropTypes from 'prop-types';
import { useAppStore } from '../../hooks/app.store';
import { useRouter } from 'next/router';
// styles
import { DrawerStyled, StyledDrawerFilter, StyledTypeSession } from './styled';
// components
import { Button, CustomCheckbox } from 'components';
// services
import {
  getTypeSession,
  getBooth,
  getTags,
  getListTimeSlot
} from 'services/thongtinsukien';
import moment from 'moment';

const { Panel } = Collapse;
const { CheckableTag } = Tag;
function DrawerFilter(props) {
  const [appStore, updateAppStore] = useAppStore();
  const router = useRouter();
  const { id } = router.query;
  //props
  const { onClose, visible, getData, params, setParams, tags, setTags } = props;
  // state
  const [typeSession, setTypeSession] = useState([]);
  const [listTime, setListTime] = useState([]);

  const [listBooth, setListBooth] = useState([]);
  const [listTags, setListTags] = useState([]);
  // Function
  function onCloseDrawerFilter() {
    updateAppStore(draf => {
      draf.isShowDrawerFilter = false;
    });
  }

  function onRefesh() {
    setParams(previousState => ({
      ...previousState,
      typeSessionId: [],
      boothId: []
    }));
    setTags([]);
  }

  function onFilter() {
    getData();
    updateAppStore(draf => {
      draf.isShowDrawerFilter = false;
    });
  }

  async function getTimeSlot() {
    const data = {
      eventId: id
    };
    const res = await getListTimeSlot(data);
    if (res) {
      setListTime(res);
    }
  }

  async function getListTypeSession() {
    const res = await getTypeSession({ eventID: id });
    if (res) {
      setTypeSession(res);
    }
  }

  async function getListBooth() {
    const res = await getBooth(id);
    if (res) {
      setListBooth(res);
    }
  }

  async function getListTags() {
    const res = await getTags({ eventID: id });
    if (res) {
      setListTags(res);
    }
  }

  function onChangeTypeSession(checkedValues) {
    setParams(previousState => ({
      ...previousState,
      typeSessionId: checkedValues
    }));
  }

  function onChangeBooth(checkedValues) {
    setParams(previousState => ({
      ...previousState,
      boothId: checkedValues
    }));
  }
  // Tag
  function onChangeTabs(tag, checked) {
    const nextSelectedTags = checked
      ? [...tags, tag]
      : tags.filter(t => t !== tag);
    setTags(nextSelectedTags);
  }

  useEffect(() => {
    if (appStore.isShowDrawerFilter) {
      getListTypeSession();
      getListTags();
      getTimeSlot();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStore.isShowDrawerFilter]);

  useEffect(() => {
    if (appStore.isShowDrawerFilter) {
      if (id) {
        getListBooth();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, appStore.isShowDrawerFilter]);

  return (
    <DrawerStyled>
      <StyledDrawerFilter
        title={
          <>
            <img src={images.icon_close} onClick={onCloseDrawerFilter} />
            <div className="filter-title">Lọc</div>
          </>
        }
        placement={'right'}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={'placement'}
        className="news-Drawer"
        footer={[
          <div className="news-Drawer__footer">
            <div className="button-footer">
              <Button type="outline" className="btn-reset" onClick={onRefesh}>
                Làm mới
              </Button>
            </div>
            <div className="button-footer">
              <Button type="primary" className="btn-search" onClick={onFilter}>
                Tìm kiếm
              </Button>
            </div>
          </div>
        ]}
      >
        <Collapse
          ghost
          className="news-collapse"
          expandIcon={({ isActive }) => (
            <>
              {isActive ? (
                <i className="icon icon-expand-less collapse-arrow" />
              ) : (
                <i className="icon icon-expand-more collapse-arrow" />
              )}
            </>
          )}
        >
          <Panel
            header={
              <>
                <div className="title-filter">Loại session</div>
              </>
            }
            key="1"
          >
            <Row gutter={[0, 0]}>
              <Col span={24}>
                <Checkbox.Group
                  value={params.typeSessionId}
                  onChange={onChangeTypeSession}
                >
                  {typeSession &&
                    typeSession.map(item => (
                      <StyledTypeSession>
                        <CustomCheckbox value={item.id}>
                          {item.name}
                        </CustomCheckbox>
                      </StyledTypeSession>
                    ))}
                </Checkbox.Group>
              </Col>
            </Row>
          </Panel>
          {<div className="dash"></div>}
          <Panel header={<div className="title-filter">Location</div>} key="2">
            <Row gutter={[12, 0]}>
              <Col span={24}>
                <Checkbox.Group value={params.boothId} onChange={onChangeBooth}>
                  {listBooth &&
                    listBooth.map(item => (
                      <StyledTypeSession>
                        <CustomCheckbox value={item.id}>
                          {item.name}
                        </CustomCheckbox>
                      </StyledTypeSession>
                    ))}
                </Checkbox.Group>
              </Col>
            </Row>
          </Panel>
          <div className="dash"></div>
          <Panel header={<div className="title-filter">Keywork</div>} key="3">
            <div className="filter-tag">
              {listTags &&
                listTags.map(item => (
                  <CheckableTag
                    key={item.id}
                    checked={tags.indexOf(item.id) > -1}
                    onChange={checked => onChangeTabs(item.id, checked)}
                  >
                    {tags.includes(item.id) && (
                      <img src={images.icon_check_filter} alt="icon_check" />
                    )}
                    {item.name}
                  </CheckableTag>
                ))}
            </div>
          </Panel>
          <div className="dash"></div>
          <Panel header={<div className="title-filter">Thời gian</div>} key="4">
            <div className="filter-tag">
              {listTime &&
                listTime.map(data => {
                  return (
                    <CheckableTag
                      key={data.date}
                      checked={tags.indexOf(data.date) > -1}
                      onChange={checked => onChangeTabs(data.date, checked)}
                    >
                      {tags.includes(data.date) && (
                        <img src={images.icon_check_filter} alt="icon_check" />
                      )}
                      {moment(data.date).format('DD/MM')}
                    </CheckableTag>
                  );
                })}
            </div>
          </Panel>
          {<div className="dash"></div>}
        </Collapse>
      </StyledDrawerFilter>
    </DrawerStyled>
  );
}

DrawerFilter.propTypes = {
  onClose: PropTypes.any,
  visible: PropTypes.any,
  getData: PropTypes.func,
  params: PropTypes.object,
  setParams: PropTypes.object,
  tags: PropTypes.array,
  setTags: PropTypes.array
};

export default DrawerFilter;
