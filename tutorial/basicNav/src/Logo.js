import React,{Component} from "react";
import { Image } from 'react-native';
import Logo from "./assets/images/download.jpg"


class LogoHeader extends Component {
    render() {
        return (
            <Image
                source={Logo}
                style={{width:50,height:50}}
            />
        )
    }
}

export default LogoHeader