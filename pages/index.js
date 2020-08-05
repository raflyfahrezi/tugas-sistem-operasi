import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../component/chart'))

const Index = () => {
    return (
        <div>
           <Chart/>
        </div>
    )
}

export default Index