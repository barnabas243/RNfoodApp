import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

// interface HomeScreenCellProps {
//     title: string;
//     tagline: string;
//     eta: string;
//     imgUri: ImageSourcePropType;
//     highlightColor?: string; // Optional highlight color prop
// }
const HomescreenCell = ({ ...props }) => {
    return (
        <TouchableOpacity onPress={props.action}>
            <Cell
                key={props.index}
                style={{ backgroundColor: 'transparent', height: props.height }}
                contentContainerStyle={styles.cellContentView}
                highlightUnderlayColor="#ccc"
            >
                <Image source={props.imgUri} style={styles.image} />
                <View style={styles.etaContainer}>
                    <Text style={styles.eta}>{props.eta} mins</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.tagline}>{props.tagline}</Text>
                </View>
            </Cell>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cellContentView: {
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    etaContainer: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        backgroundColor: '#fff', // Set the highlight color
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 80,

    },
    eta: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flexWrap: 'wrap', // Allow text wrapping
    },
    textContainer: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 14,
        color: '#888',
    },
});

export default HomescreenCell;
