import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  huntCardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  imageView: {
    height: 140,
    width: 160,
    borderRadius: 10,
    marginRight: 15,
  },
  imageStyle: {
    flex: 1,
    width: 'auto',
    height: 180,
    alignSelf: 'stretch',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  description: {
    flexWrap: 'wrap',
    marginBottom: 5,
    fontSize: 13,
  }
});
