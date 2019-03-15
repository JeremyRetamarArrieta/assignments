import React, { component}  from 'react'
import axios from 'axios'

const BountiesContext = React.createContext()

class BountiesProvider extends Component {
    constructor (){
        super()
        this.state = {
            bounties: []
        }
    }

    getBounties = () => {
        axios.get("/bounties").then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }

    addBounties = newBounty => {
        axios.post("/bounties" , newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }

    //might break
    putBounty = _id => {
        axios.put(`/bounties/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id)
            }))
        })
    }

    deleteBounty = _id => {
        axios.delete(`/bounties/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    render(){
        return(
            <BountiesContext.Provider
                value={{
                    bounties: this.state.bounties,
                    getBounties: this.state.getBounties,
                    addBounties: this.state.addBounties,
                    putBounty: this.state.putBounty,
                    deleteBounty: this.state.deleteBounty
                }}>
                { this.props.children }
            </BountiesContext.Provider>
        )
    }
}

export default BountiesContext

export const withBounties = C => props => (
    <BountiesContext.Consumer>
        { value => <C {...props} {...value}/> }
    </BountiesContext.Consumer>
)