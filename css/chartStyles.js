import { StyleSheet } from "react-native";

export const chartStyles = StyleSheet.create({
    main: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 25,
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 15,
    },
    subtitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 17.5,
        marginBottom: 15,
    },
    positive: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0098DB'
    },
    negative: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#DB4D69'
    },
    reportTitle: {
        textAlign: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',   
        marginTop: 35,
        marginBottom: 15,
        fontSize: 17,
        fontWeight: 'bold'
    },
    keyword: {
        textAlign: 'left',
        fontSize: 17.5
    },
    count: {
        position: 'absolute',
        right: 0,
        fontSize: 15,
        top: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#BEBEBE', 
        marginTop: 20
    },
    reportView: {
        flexDirection:'row', 
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    concern: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 17.5,
        fontWeight: 'bold',
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,   
        color: '#1c4587'
    },
    suggestion: {
        fontSize: 15,
        paddingBottom: 75,
        fontWeight: '500',
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250,
    },
    loadText: {
        padding: 10,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    sentimentData: {
        fontSize: 15,
        padding: 15,
        paddingTop: 2.5,
        paddingBottom: 2.5,   
        color: '#000000'
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
    }
})