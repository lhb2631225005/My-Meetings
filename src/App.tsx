import './App.css'
import { Collapse, Input } from 'antd'
import MeetingItem, { MeetingItemProps } from './components/MeetingItem/index'

const { Search } = Input
const { Panel } = Collapse

const data: MeetingItemProps[] = [
  {
    id: '1',
    name: 'NGR流失访谈',
    time: '2023-08-01 10:00:00',
    location: 'Zoom',
    tags: ['magenta', 'orange'],
  },
  {
    id: '2',
    name: 'NGR流失访谈',
    time: '2023-08-01 10:00:00',
    location: 'Zoom',
    tags: ['magenta', 'orange'],
    meetings: [
      {
        id: '3',
        name: 'NGR流失访谈',
        time: '2023-08-01 10:00:00',
        location: 'Zoom',
        tags: ['magenta', 'orange'],
      },
      {
        id: '4',
        name: 'NGR流失访谈',
        time: '2023-08-01 10:00:00',
        location: 'Zoom',
        tags: ['magenta', 'orange'],
      },
    ],
  },
]

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>我的座谈会(999)</div>
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>
      <div className="container">
        <p>进行中</p>
        {data.map((item) => (
          <MeetingItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default App
