import * as React from "react";
import { loadBingApi, Microsoft } from "./BingMapBoxLoader";

export interface LatLng {
    latitude: number;
    longitude: number;
}

interface IMapProps {
    apiKey: string;
    center: LatLng;
    className: string;
}

export class BingMapBox extends React.Component<IMapProps, any> {
    private mapRef = React.createRef<HTMLDivElement>();
    private map: any;
    //This function is invoked immediately after the component is mounted to the DOM.
    //If you also want to make network requests as soon as the component is mounted to the DOM, this is a perfect place to do 
    public componentDidMount() {
        loadBingApi(this.props.apiKey).then(() => {
            this.initMap();
        });
    }

    public render() {

        return <div ref={this.mapRef} className={this.props.className} />;
    }
    componentWillReceiveProps(newProps: IMapProps) {
        if (newProps.center !== this.props.center) {
            this.map.setView({
                center: new Microsoft.Maps.Location(newProps.center.latitude, newProps.center.longitude),
            });
        }
    }

    private initMap() {
        this.map = new Microsoft.Maps.Map(this.mapRef.current);
        // if (this.props.mapOptions) {
        // let center1: LatLng = this.props.center;
        // this.map.setOptions({
        //     center: new Microsoft.Maps.Location(center1.latitude, center1.longitude)
        // });
        this.map.setView({
            //mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            center: new Microsoft.Maps.Location(this.props.center.latitude, this.props.center.longitude),
            //zoom: 15
        });
        // }
        //return map;
    }
}