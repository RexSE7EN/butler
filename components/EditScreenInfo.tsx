import { Text, View } from 'react-native';

interface EditScreenInfoProps {
  path: string;
}

export const EditScreenInfo: React.FC<EditScreenInfoProps> = ({ path }) => {
  const title = 'Join for cup of tea and refreshing break';
  const description =
    'Movies, TV Shows, Anime, and more. Discover a world of entertainment at your fingertips.';

  return (
    <View className={styles.container}>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <Text className={styles.getStartedText}>{description}</Text>
        <View className={styles.separator} />
      </View>
    </View>
  );
};

const styles = {
  container: `w-full`,
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  getStartedText: `text-lg leading-6 text-center`,
  homeScreenFilename: `my-2`,
};
