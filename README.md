# Artsy 🎨

"Art"와 "Easy"를 합친 합성어로, 문화 생활을 쉽게 즐길 수 있다는 의미입니다.
나만의 문화기록을 하고싶은 사람, 티켓을 오프라인이 아닌 온라인으로 관리하고 싶은 분, 문화생활 통계를 확인하고 싶은 분을 위한 공간입니다.
[Artsy 사이트 보러가기](https://elice-artsy.kro.kr/)

## 프로젝트 목표
- 티켓 관리를 할 수 있다.
- 개인 맞춤 서비스를 제공한다.
- 높은 사용자 편의성을 제공한다. 

## 폴더 구조
```
src
 ┣ assets # Contains static assets such as  images, svgs, company logo..
 ┣ components
 ┃ ┣ @common # resuable components
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┣ Button.jsx # actual React component
 ┃ ┃ ┃ ┗ Button.styles.js # styled-component
 ┣ constants # constants(confirm, error msg, regexp...)
 ┣ contexts # contexts provider
 ┣ hooks # custom hooks
 ┃ ┗ @queries # react query 훅 
 ┣ pages # majority of the app pages
 ┣ styles # global styles
 ┣ utils # utilities(data formating, API...)
 ┣ App.jsx
 ┣ main.jsx 
 ┗ router.jsx
```

##  Git-flow 브랜치 전략
```
                 feature/#
                /
master -----dev
                 \
                 feature/...
```

## 팀원 및 역할
|  이름  |   파트   | 담당 업무                                                                                                                                                            |
| :----: | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 송서현 | Front-End(FE Team Leader)| 프로젝트 초기 셋팅(folder architecture, dependencies)<br> 티켓목록 화면 구현(무한스크롤페지네이션)<br> 토스트팝업 구현(Context API)<br> 비밀번호찾기 화면 구현<br> 회원정보수정 화면 구현<br> 마이페이지 구현<br> 인트로 화면 구현<br> PWA 및 오픈그래프 구현 |
| 이지영 | Front-End | 홈화면 구현<br> 로그인/ 회원가입 화면 구현<br> 등급안내 화면 구현<br> 다크모드 구현 |
| 김지윤 | Front-End | 티켓 상세/ 수정/ 삭제 화면 구현<br> 마이 통계 화면 구현 |
| 최하은 | Back-End(Leader) | db 스키마 관리<br>프로젝트 초기구조 구축(di, dto)<br>티켓관련 api<br>ci/cd 구축 |
| 최원진 | Back-End | user관련 api<br> 공통 에러 관리<br> 레디스를 이용한 리프레쉬 토큰<br>s3를 이용한 파일서버관리<br> 메일발송기능|

## 사용 기술 스택
- 프론트엔드: <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="reactquery" src ="https://img.shields.io/badge/reactquery-FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <img alt="styledcomponents" src ="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white"/> 
- 백엔드: <img alt="Node.js" src ="https://img.shields.io/badge/Node.js-3776AB.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/> <img alt="Express.js" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=black"/> <img alt="mysql" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> 



## 테스트 계정 정보
##### 사용자 로그인
- ID: test@test.com
- PW: qwer1234!

