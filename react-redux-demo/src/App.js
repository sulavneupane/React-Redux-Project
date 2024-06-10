import {Provider} from "react-redux";
import store from "./redux/store";
import './App.css';
import UserContainer from "./components/UserContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UserContainer/>
                {/*<ItemContainer cake/>*/}
                {/*<ItemContainer/>*/}
                {/*<HooksCakeContainer/>*/}
                {/*<CakeContainer/>*/}
                {/*<IceCreamContainer/>*/}
                {/*<NewCakeContainer/>*/}
            </div>
        </Provider>
    );
}

export default App;
