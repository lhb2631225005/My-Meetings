import { useCallback, useRef, useState } from 'react'
import { Avatar, Button, Col, Divider, Row, Tag, Tooltip } from 'antd'
import { CaretRightOutlined, MoreOutlined } from '@ant-design/icons'

import './index.css'

export interface MeetingItemProps {
  name: string
  time: string
  location: string
  meetings?: Omit<MeetingItemProps, 'meetings'>[]
  tags: string[]
  id: string
}

function meetingContent({ item }: { item: MeetingItemProps }) {
  const meetingRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const changeCollapsed = useCallback(() => {
    setIsCollapsed(!isCollapsed)
    if (isCollapsed) {
      meetingRef.current!.style.height = '0px'
    } else {
      meetingRef.current!.style.height = 'auto'
      const { height } = meetingRef.current!.getBoundingClientRect()
      meetingRef.current!.style.height = '0px'
      meetingRef.current!.offsetHeight // trigger reflow
      meetingRef.current!.style.transition = 'height 0.5s'
      meetingRef.current!.style.height = height + 'px'
    }
  }, [isCollapsed])
  return (
    <div className="item">
      <div className={'head'} onClick={changeCollapsed}>
        {Array.isArray(item.meetings) && item.meetings.length > 0 ? (
          <CaretRightOutlined
            className={'icon ' + (isCollapsed ? 'rotate' : '')}
          />
        ) : null}
        <div className={'info'}>
          <div>
            <Tag color="magenta">magenta</Tag>
            <Tag color="magenta">magenta</Tag>
          </div>
          <div className={'name'}>NGR流失访谈{` >> `}Product</div>
          <Row>
            <Col span={12} className={'df'}>
              <span>创建者</span>
              <Avatar.Group
                max={{
                  count: 1,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                />
              </Avatar.Group>
            </Col>
            <Col span={12} className={'df'}>
              <span>协助者</span>
              <Avatar.Group
                max={{
                  count: 1,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                />
              </Avatar.Group>
            </Col>
          </Row>
        </div>
        <Divider type="vertical" className={'divider'} />
        <div className={'time'}>
          <div>2024-10-11 18:00:00</div>
          <Divider type="vertical" />
          <div>2024-10-11 18:00:00</div>
        </div>
        <Divider type="vertical" className={'divider'} />
        <div className={'address'}>端手游体验室(深圳-D100045)</div>
        <Divider type="vertical" className={'divider'} />
        <div className={'actions'}>
          <Button type="primary">进入直播</Button>
          <Button shape="circle" icon={<MoreOutlined />} />
        </div>
      </div>
      <div ref={meetingRef} style={{ overflow: 'hidden', height: 0 }}>
        {Array.isArray(item.meetings)
          ? item.meetings.map((meeting) => (
              <div className="meetings" key={meeting.id}>
                <div>NGR流失访谈</div>
                <div>时间:2024-10-11 18:00:00 - 2024-10-11 19:00:00</div>
                <div>端手游体验室</div>
                <div>lucyyang(杨舒淇)</div>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default meetingContent
