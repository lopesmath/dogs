import React, { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    })

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )
    setGraph(graphData)
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <h2>
          Acessos: <span className={styles.number}>{total}</span>
        </h2>
      </div>
      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: '#fff', strokeWidth: 2 },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
    </section>
  )
}

export default UserStatsGraphs
