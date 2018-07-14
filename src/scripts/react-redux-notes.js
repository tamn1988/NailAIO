import { map } from "@firebase/util";

// Higher order components - a component that renders another component

//A function returns a component that renders another component
//Props passed down
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info, please don't share!</p>
            <WrappedComponent {...props} />
        </div>
    )
}

//regular component
const info = (props) => (
    <div>
        <h1>info</h1>
        <p>the info is: {props.info}</p>
    </div>
)

const AdminInfo = withAdminWarning(Info);
//Props can be passed down
ReactDOM.render(<AdminInfo isAdmin={true} info='Here are the details' />, document.getElementById('app'));


//Provider - allows us to provide the store to all the components
<Provider store={store}>
    <App />
</Provider>


//connect()() - connects a component to redux store.
//has access to state


const ConnectedComponent = connect((state) => {
    //An object is returned with what we need from store
    return {
        whateverwewantfromstate: state.whatever
    };
})(Component)

//take the function inside connect and break it into its own variable. called mapstatetoprops
const mapStateToProps = (state)=> {
    return {
        whateverwewantfromstate: state.whatever
    }
}

// this allows us to export connect()()
export default connect(mapStateToProps)(Component)


//everytime the store changes. mapstatetoprops automatically reruns getting fresh values into the component