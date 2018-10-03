import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');
class LiveData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0,
            stocks: [],
        };
        this.scrolling = this.scrolling.bind(this);

    }

    // Activate scrolling animation
    componentDidMount() {
        this.activeInterval = setInterval(this.scrolling, 100);
    }
    // Get stock information from API
    componentWillMount() {
        this.getStockObj();
    }
    // Symbols to be sent to API
    getSymbols() {
        let stockSymbols = [
            // ...Commodity
        ]
        return stockSymbols;
    }
    // Scrolling Animation
    scrolling() {
        // Start scrolling if there's more than one stock to display
        if (this.state.stocks.length > 1) {
            // Increment position with each new interval
            position = this.state.currentPosition + 5;
            this.ticker.scrollTo(
                { x: position, animated: true }
            );
            // After position passes this value, snaps back to beginning
            let maxOffset = 20000;
            // Set animation to repeat at end of scroll
            if (this.state.currentPosition > maxOffset) {
                this.ticker.scrollTo({ x: 0, animated: false })
                this.setState({ currentPosition: 0 });
            }
            else {
                this.setState({ currentPosition: position });

            }
        }

    }
    // Clear interval when user closes 
    componentWillUnmount() {
        clearInterval(this.activeInterval);
    }
    async getStockObj() {

        let symbols = this.getSymbols();
        let url = 'localhost:8080/getPrice?symbols=';
        for (let ctr = 0; ctr < symbols.length; ctr++) {
            url += symbols[ctr] + ',';
        }
        //alert(url);
        try {
            let fetchResponse = await fetch(url);
            let json = await fetchResponse.json();
            //console.log(JSON.stringify(json));
            let stocksArray = [];
            Object.keys(json).map((key, index) => {
                stocksArray.push(json[key]);
            });
            this.setState({ stocks: stocksArray });
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        if (this.state.stocks.length > 1) {
            return (
                <View>
                    <ScrollView
                        style={styles.scrollview}
                        horizontal={true}
                        ref={(ref) => this.ticker = ref}
                        bounces={true}
                    >
                        {this.state.stocks.map((item, index) => (

                            <View key={index} style={styles.view}>
                                <View style={styles.hr} />

                                <Text style={styles.text}>{item.company.companyName}</Text>
                                <Text style={styles.text}>{item.company.symbol}</Text>
                                <Text style={styles.text}>${item.price}</Text>
                                <View style={styles.hr} />

                            </View>
                        ))}
                    </ScrollView>

                </View>

            );
        }
        else {
            return (
                <View style={styles.view}>
                    <View style={styles.scrollview}>
                        <Text style={styles.text}>Loading...</Text>
                    </View>
                </View>
            );
        }

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 5,
        paddingRight: width / 3,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    scrollview: {
        // height: height,
        // width: width,
        paddingLeft: width / 2,
        backgroundColor: 'white',

    },
    view: {
        paddingTop: height / 2 - 75
    },
});
export default LiveData;