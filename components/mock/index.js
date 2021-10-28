import { useState, useEffect } from 'react'
import { List, Avatar } from 'antd'
import axios from 'axios'
import styles from './style.module.css'

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
                console.log('res: ', JSON.parse(res.data.userInfo))
                setList(JSON.parse(res.data.userInfo))
                setLoading(false)
            }).catch(err => {
                console.log('error: ', err)
                setLoading(false)
            })
    }

    useEffect(() => {
        loadData()
        console.log('list: ', list)
    }, [])

    return (
        <div className={styles.list}>
            {!loading ?
                <List
                    dataSource={list}
                    renderItem={user => (
                        <List.Item key={user.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={user.img} />}
                                description={user.sex}
                            />
                            <div>{user.name}</div>
                        </List.Item>
                    )}
                /> : null
            }
        </div>
    )
}

export default Mock
