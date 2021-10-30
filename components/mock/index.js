import { useState, useEffect } from 'react'
import { List, Avatar, Spin } from 'antd'
import axios from 'axios'

import styles from './style.module.scss'

const Mock = () => {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    const loadData = () => {
        if (loading) {
            return
        }
        setLoading(true)
        axios.get("/api/mock")
            .then(res => {
                // console.log('res: ', JSON.parse(res.data.userInfo))
                setList(JSON.parse(res.data.userInfo))
                setLoading(false)
            }).catch(err => {
                console.log('error: ', err)
                setLoading(false)
            })
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className={styles.list}>
            <h2>Mock Test</h2>
            {!loading ?
                <List
                    dataSource={list}
                    renderItem={user => (
                        <List.Item key={user.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={user.img} />}
                                description={`性别：${user.sex} 年龄：${user.age}`}
                            />
                            <div>{user.name}</div>
                        </List.Item>
                    )}
                /> : <Spin tip="Loading..." />
            }
        </div>
    )
}

export default Mock
