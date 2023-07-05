import ForgeUI, {
  render,
  Fragment,
  Macro,
  Text,
  Heading,
  useProductContext,
  useState,
} from '@forge/ui';
import api, { route } from '@forge/api';
import AppForm from './components/AppForm';

const fetchComments = async (contentId) => {
  const res = await api
    .asUser()
    .requestConfluence(
      route`/wiki/rest/api/content/${contentId}/child/comment`
    );

  const data = await res.json();
  return data.results;
};

const App = () => {
  const context = useProductContext();
  const [comments] = useState(
    async () => await fetchComments(context.contentId)
  );

  // console.log(`Number of comments on this page: ${comments.length}`);
  // console.log('Comments', comments[0].body);

  return (
    <Fragment>
      <Heading>Forge App</Heading>
      <Text>Hello Everyone!</Text>
      <AppForm />
      <Text>
        Total Comments: {comments.length === undefined ? 0 : comments.length}
      </Text>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
