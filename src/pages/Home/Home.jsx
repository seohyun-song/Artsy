import Badge from '../../components/Badge/Badge';
import CategoryLink from '../../components/CategoryLink/CategoryLink';
import * as H from './Home.styles';
// {
//     "artsyData": [
//       {
//         "name": "뮤지컬",
//         "color": "#ff0000"
//       }
//     ]
//   }
const categories = [{ name: '뮤지컬' }, { name: '영화' }, { name: '전시' }, { name: '콘서트' }, { name: '연극' }];
const Home = () => {
    return (
        <H.Home>
            <H.UserInfo>
                <H.MainGreeting>
                    <h2>
                        안녕하세요,
                        <br />
                        서현님
                    </h2>
                    <p>오늘의 추억이 있으신가요?</p>
                </H.MainGreeting>
                <Badge />
            </H.UserInfo>
            <H.RecordCollection>
                <H.Record>
                    <h2>기록함</h2>
                    <p>나만의 공간에 오늘의 소중한 문화 경험을 기록해보세요!</p>
                </H.Record>
                <H.CategoryContainer>
                    <H.CategoryWrapper>
                        {categories.map((cat, index) => (
                            <CategoryLink name={cat.name} key={index} />
                        ))}
                    </H.CategoryWrapper>
                </H.CategoryContainer>
            </H.RecordCollection>
        </H.Home>
    );
};
export default Home;
