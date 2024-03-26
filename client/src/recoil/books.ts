import { atom, selectorFamily } from "recoil";

/* TEMPORARY BOOK DATA */

const temporaryBook: IBook = {
  _id: "13571957192712597215912",
  representImg:
    "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198356680.jpg",
  category: "인문",
  parentCategory: ["국내도서"],
  title: "[뇌건강] 스스로 치유하는 뇌",
  author: "노먼 도이치",
  discount: 17,
  price: 19600,
  unit: "원",
  comment: "뇌의 변화를 통한 놀라운 치유",
  desc: "우리의 뇌는 당신의 생각보다 유연하다",
  publisher: "동아시아",
};

export const books: IBook[] = [...Array.from({ length: 10 })].map((_, i) => {
  const book = { ...temporaryBook };
  book._id = book._id += i;
  return book;
});

export const temporaryBestSeller: TBookShortcut = {
  id: 1,
  title: "데일 카네기 인간관계론",
  representImg:
    "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791187142560.jpg",
  author: "데일 카네기",
  category: "현대지성",
  price: 10350,
};

export const temporaryBestSellers: TBookShortcut[] = [
  ...Array.from({ length: 10 }),
].map((_, i) => {
  const book = { ...temporaryBestSeller };
  book.id = i;
  return book;
});

export const temporaryRecommendBook: TBookShortcut = {
  id: 1,
  title: "돈의 속성",
  representImg:
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791188331796.jpg",
  author: "김승호",
  category: "경제/경영",
  price: 19600,
};

export const temporaryRecommendBooks: TBookShortcut[] = [
  ...Array.from({ length: 4 }),
].map((_, i) => {
  const book = { ...temporaryRecommendBook };
  book.id = i;
  return book;
});

const temporaryNewBook: TBookOptional = {
  id: 1,
  title: "데일 카네기 인간관계론",
  representImg:
    "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791187142560.jpg",
  author: "데일 카네기",
  category: "현대지성",
  publisher: "요즘책방",
  discount: 10,
  price: 10350,
  unit: "원",
};

export const temporaryNewBooks: TBookOptional[] = [
  ...Array.from({ length: 6 }),
].map((_, i) => {
  const book = { ...temporaryNewBook };
  book.id = i;
  return book;
});

export const detailsBook: TBook = {
  id: 1,
  representImg:
    "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192300818.jpg",
  parentCategory: "국내도서",
  category: "인문",
  title: "마흔에 읽는 쇼펜하우어",
  author: "강용수",
  discount: 10,
  price: 17000,
  eBookPrice: 13500,
  unit: "원",
  publisher: "유노북스",
  sellType: ["종이책", "eBook"],
};

/* bookId-referrer / awards & intro */

export const bookDetails: BookDetails = {
  awards: ["미디어 추천도서"],
  intro: `마흔의 마음은 복잡하다. 그동안 수많은 시험을 치르고 자리 잡기 시작했지만, 한참 남은 인생이 기대되기보다 늘 그렇듯 같은 일상이 반복될 것이라는 생각을 하게 된다. 벌써부터 웬만한 일은 재미가 없고 뻔하게 느껴진다. 언제부터인가 “산다는 것은 괴로운 것이다”라는 말에 고개를 끄덕이게 됐다. 행복, 고통, 인생에 대해 고민하기 시작한 당신에게 쇼펜하우어의 조언이 필요할 때다.

  “즐겁고 행복하게 사는 기술이 삶의 지혜다.”
  
  행복과 고통에 대해 알기 시작할 때, 삶을 현실적으로 보고 싶을 때, 인생의 무게 중심을 옮겨야 할 때, 마음의 위기를 겪을 때, 쇼펜하우어를 빼놓고 인생을 논하지 마라. 쇼펜하우어는 인생에 고난과 고통이 어느 정도 필요하다며, 인생이 고통이라면 ‘진짜 행복’을 위한 고통을 겪으라고 말했다. 삶의 기준을 타인에게서 자신으로 옮기며 스스로 무너지고 깨지고 부서져 보면 새로운 것을 발견할 수 있다. 바로 자기 자신을 긍정하는 마음, 타인에게 비굴하지 않는 당당함, 스스로의 힘으로 살 수 있는 품격이다. 쇼펜하우어는 마음을 다스릴 수 있는 지혜들을 책으로 남겼다.
  
  쇼펜하우어 철학은 프리드리히 니체, 아인슈타인, 카를 융, 바그너, 헤르만 헤세, 프란츠 카프카, 톨스토이 등 각계 명사들에게 영향과 영감을 주었다. 그런 그도 40대까지는 학계를 떠나 은둔 생활을 했다. 하지만 쇼펜하우어는 언제든 자신이 인정받을 것이라는 자부심을 갖고 흔들리지 않았다. 쇼펜하우어는 40대 중반부터 서서히 실력이 알려지며 세계적인 명성을 떨쳤다. 그에게 40대는 위기를 넘은 때이자 인생이 바뀐 분기점이다.`,
  contentsList: `시작하며 상대적인 삶이 아니라 절대적인 삶을 위하여

  1장 마흔, 왜 인생이 괴로운가 / 쇼펜하우어의 진리
  01 삶은 전부 의지에 달려 있다 |고통|
  -살고자 하는 의지는 인간의 본능이다
  -고통을 깨달아야 인생을 깨닫는다
  
  02 인간은 욕망하기 때문에 욕망할 이유를 찾는다 |욕망|
  -인간은 구체적으로 욕망한다
  -욕망에는 선악이 없다
  
  03 인생은 고통과 권태를 왔다 갔다 하는 시계추 |과잉|
  -욕망의 최대 만족과 최대 결핍
  -지나침과 미치지 못함은 같다
  
  04 의도적인 배척도 필요하다 |결핍|
  -변화하는 조건에 의존하는 행복은 오래가지 않는다
  -긍정적인 호기심과 부정적인 호기심을 구분하라
  
  05 욕망은 필연이다 |충족|
  -두려움과 희망의 근원은 같다
  -욕망이라는 갈증을 해소하는 방법
  
  06 행복하게 산다는 것은 고통을 견딘다는 것이다 |행복|
  -당연한 것은 세상에 없다
  -행복에 가까워지는 확실한 방법
  
  2장 왜 있는 그대로 인정해야 하는가 / 쇼펜하우어의 자신
  07 행복과 불행에 대한 관점을 바꿔라 |성격|
  -기질 속에 나의 길이 있다
  -고쳐 쓰지 못하면 바꿔 쓸 수 있다
  
  08 하고 싶은 것과 할 수 있는 것을 분별하라 |능력|
  -행복을 위한 가장 중요한 출발점
  -행복은 지극히 주관적인 선택이다
  
  09 행복과 불행을 상상하지 마라 |감정|
  -기억과 예견은 착각이다
  -돌아보지 말고 내다보지 마라
  
  10 고통의 총량은 변하지 않는다 |죽음|
  -나와 상관없이 세상은 잘 돌아간다
  -죽음은 고통을 해결하는 수단이 아니다
  
  11 모든 인생사는 수난의 역사다 |삶에의 의지|
  -삶의 긍정이라는 삶의 부정
  -존재하지 않고 행복할 수 없다
  
  3장 무엇으로 내면을 채워야 하는가 / 쇼펜하우어의 행복
  12 행복의 90퍼센트는 건강에 좌우된다 |건강|
  -건강한 정신력을 위해 그에 맞는 노력을 하라
  -명랑해야 잘 살 수 있다
  
  13 마음의 안정이 없는 행복은 있을 수 없다 |평정심|
  -마음의 평정을 찾는 네 가지 방법
  -나를 불안하게 하는 것들과 작별하라
  
  14 예술 감각을 갖춰라 |관조|
  -자연 앞에 인간의 고통은 아무것도 아니다
  -음악은 의지를 울린다
  
  15 인생의 무게 중심을 밖에서 안으로 옮겨라 |향유|
  -인생의 질을 결정짓는 한 가지
  -타인에게 방해받지 마라
  
  16 인생은 짧고 시간과 힘은 한정돼 있다 |독서|
  -양서를 읽기 위한 세 가지 조건
  -군주처럼 사유하라
  
  17 문체는 정신의 관상이다 |글쓰기|
  -글에 필요한 두 가지, 단호함과 확고함
  -그럴듯하게 보여 주지 말고 자기 자신을 위해 써라
  
  4장 어떤 사람으로 살아야 하는가 / 쇼펜하우어의 관계
  18 영원을 위해 사랑한다 |본능|
  -사랑은 영원히 살아 있음을 상징한다
  -사랑의 형이상학
  
  19 사랑은 이상향이자 현실이다 |연애|
  -사랑에 빠지면 콩깍지가 씌이는 이유
  -서로의 차이만 기억한다면 사랑은 행복한 착각이다
  
  20 결혼은 공동의 실존이다 |결혼|
  -사랑과 결혼 그 후를 내다보라
  -많은 것을 기대하지 않으면 행복에 가까워진다
  
  21 인간은 더 완벽해지기 위해 사랑을 한다 |조건|
  -나와 반대인 사람에게 끌리는 실존적 이유
  -사랑을 현실적으로 인정하라
  
  22 당신의 거리를 유지하라 |관계|
  -상처를 주지도 받지도 마라
  -함께하기와 거리 두기의 균형을 잡아야 한다
  
  23 혼자 있는 법을 익혀라 |고독|
  -홀로 있는 능력이 생겼을 때 가치 있게 살 수 있다
  -온전히 혼자 있어 보라
  
  24 타인의 고통에 연민을 느껴라 |공감|
  -인간의 양가감정
  -사랑하지 않아도 미워하지 말 것
  
  5장 어디에서 행복을 찾아야 하는가 / 쇼펜하우어의 인생
  25 행복한 순간은 너무나 짧다 |만족|
  -행복은 항상 과거형이다
  -자신에게 알맞은 행복이 있다
  
  26 현재는 두 번 다시 오지 않는다 |현재|
  -현재를 살아라
  -하루하루는 하나하나의 인생이다
  
  27 자신만의 색깔을 찾아라 |개성|
  -원하는 바를 알면 원하는 대로 살 수 있다
  -자기 자신으로 행복하라
  
  28 얼마나 소유했는지는 중요하지 않다 |돈|
  -행복한 부자, 불행한 부자
  -돈의 크기보다 돈의 관리가 더 중요하다
  
  29 타인의 평가는 중요하지 않다 |자존감|
  -나도 남을 평가할 수 없고 남도 나를 평가할 수 없다
  -호감 가는 사람이 되기를 포기하라
  
  30 나 자신이 누구인지가 중요하다 |자기 긍정|
  -인격이 관점을 결정하고 관점이 세계를 결정한다
  -내가 깨달은 것만큼이 나의 세계다`,
  bookInside: `“인간의 행복을 가로막는 두 가지 적수가 고통과 무료함인데, 우리의 인생이란 이 두 가지 사이를 오가는 것이라고 할 수 있다. 외적으로는 궁핍과 결핍이 고통을 낳는 반면 안전과 과잉은 무료함을 낳는다. 따라서 하층 계급 사람들은 궁핍의 고통과 끊임없이 싸우는 반면 부유하고 고상한 세계의 사람들은 무료함을 상대로 싸움을 벌인다.”
  행복과 불행은 객관적인 대상이 아니라 인간의 변덕스러운 감정에 달려 있다. 없으면 없다고 불평불만하고 많으면 많다고 지겨워하는 것이 인간의 심리다.
  -36쪽 ‘인생은 고통과 권태를 왔다 갔다 하는 시계추_과잉’에서
  
  가지면 더 갖고 싶은 것이 인간의 마음이다. 하지만 죽을 때까지 다 쓰지 못하거나 죽을 때까지 다 갖지 못한다. 인간의 욕망이 끝없는 목마름과 같이 영원히 충족할 수 없다면 불행할 수밖에 없다. 그것을 충족시키기 어렵다면 욕망의 크기를 줄일 필요가 있다.
  -55쪽 ‘욕망은 필연이다_충족’에서
  
  인간은 누구나 자신이 하고자 하는 것과 할 수 있는 것이 무엇인지를 알아야 한다. 자신이 하고자 하는 것(욕망)과 자신이 할 수 있는 것(능력)을 분별하는 자기 인식이 행복의 전제 조건이다.
  -71쪽 ‘하고 싶은 것과 할 수 있는 것을 분별하라_능력’
  
  “누구나 내일이 오지 않길 한 번 이상은 원했다.”
  인간이라면 누구나 쇼펜하우어처럼 신세를 한탄해 봤을 것이다. 그런데 반대로 그런 투정 때문에 삶은 가장 좋은 것이 된다. 철학자 라이프니츠는 그래서 이 세계를 “가능한 세계 중 최상의 세계”라고 말한 바 있다. 우리가 살고 싶지 않다는 말은 그만큼 살고 싶다는 뜻이다.
  -92쪽 ‘모든 인생사는 수난의 역사다_삶에의 의지’에서
  
  무게 중심이 바깥에 있는 사람은 출세, 승진, 명예, 부 등을 추구하며 각종 모임 등에 빠져서 즐거움을 추구하지만 무게 중심이 안에 있는 사람은 혼자 있는 시간을 가지면서 개인적인 취향에 따라 예술, 시와 문학, 철학 등을 가까이 하게 된다. 마흔부터 어느 누구한테도 방해받지 않는 잔잔함을 스스로 찾도록 해야 할 것이다. 쇼펜하우어는 말했다.
  “다른 사람들을 ‘우리’가 아니라 ‘그들’로 생각하는 것이 익숙해질 것이다.”
  -126쪽 ‘인생의 무게 중심을 밖에서 안으로 옮겨라_향유’에서
  
  “조건을 고려해서 이성적으로 선택한 결혼에는 본능에 이끌린 사랑 같은 정열이 없다.” 그러나 “성적인 매력에만 이끌려서 결혼하면 평생 후회와 탄식을 안겨 줄 반려자를 얻을 것이다.”
  -168쪽 ‘인간은 더 완벽해지기 위해 사랑을 한다_조건’에서
  
  추운 날씨에 고슴도치들은 얼어 죽지 않으려고 달라붙어 하나가 되지만, 그들의 가시가 서로를 찌르는 것을 느껴 떨어진다. 그러나 추위를 견디지 못해 한 덩어리가 됐다가 떨어지기를 반복하다 결국 상대방의 가시를 견딜 수 있는 적당한 거리를 찾는다. 서로를 따뜻하게 하고 싶어 하지만 서로의 바늘 때문에 접근할 수 없었고 서로 일정한 거리를 두고 체온을 나눴다는 지혜다.
  “많은 수의 모임과 헤어짐을 반복한 고슴도치들은 다른 고슴도치와 최소한의 간격을 두는 것이 최고의 수단이라는 것을 발견했다.”
  인간관계의 어려움은 세상을 살아가는 데 꽤나 힘든 과제이기도 하다. 직장에서 상사와 동료, 가정에서 부모와 자녀, 학교에서 선생과 학생들이 잘 지내는 일은 어렵다. 고슴도치의 딜레마를 통해 타인에게 상처를 주지 않고 공존하는 지혜를 배워야 한다.
  -171쪽 ‘당신의 거리를 유지하라_관계’에서
  
  “미래가 행복을 가져다준다는 생각으로 급히 쫓아가는 반면에 현재는 거들떠보지도 즐기지도 않고 지나쳐 버리는 사람들이 있다. 현재만이 진실하고 현실적이고 확실한 것을 결코 잊어서는 안 된다.”
  우리는 ‘오늘은 단 한 번뿐’이라는 사실을 되새기며 현재를 의미로 채울 필요가 있다. 두 번 다시 오지 않을 현재 그 자체를 기분 좋게 받아들여 즐길 필요가 있다는 것이다. 우리는 오늘이 내일 다시 찾아올 것이라고 확신하는데, 그것은 착각이다. 인생 전체를 구성하는 하루하루는 똑같은 것이 아니라 어제와 다른 늘 새로운 것이다. 현재의 가치를 늘 긍정적으로 평가할 수 있어야 된다. 과거와 미래에 빠져 있는 사람은 아무런 걱정 없이 살아가는 매 순간의 가치를 모르고 지나가는 일이 많다.
  -201쪽 ‘현재는 두 번 다시 오지 않는다_현재’에서
  
  남을 따라서 ‘같음’을 추구하는 것은 낮은 단계의 욕망이다. ‘다름’을 추구하는 것은 높은 단계의 욕망이다. 나를 행복으로 이끄는 방법은 나의 욕망이 이끄는 대로 가는 것이다. 개성 있는 삶을 살기 위해 필요한 것은 자신의 욕망을 있는 그대로 긍정하는 태도다. 우선 남들이 전혀 알 수 없는 바, 나 자신만이 원하는 바, 할 수 있는 일, 그리고 타고난 재능과 성격을 이해해야 한다. 마흔이면 자신의 적성에 맞는 일을 찾기 위한 시행착오와 자기 성찰의 시간으로 충분해 보인다.
  -214쪽 ‘자신만의 색깔을 찾아라_개성’에서`,
  bookPublisherReview: `마음의 위기를 다스려야 하는
  마흔에게 필요한 철학 수업
  마흔, 가장 열정적으로 살아가는 인생의 황금기이자 ‘인생은 고통’이라는 인식에 다다르는 때다. 지식과 경험, 일과 인간관계에서 수많은 시험을 치르고 자리 잡기 시작하는 만큼 원하는 바를 성취하며 성공의 기쁨을 느끼기도 할 것이다. 하지만 이와 동시에 여전히 개인에서, 사회에서, 인생에서 실패의 아픔도 많이 겪는다. 바쁜 생활에 자신을 들여다볼 여유가 없고, 관계와 죽음에 회의감과 상실감을 느낀다.
  이렇듯 마흔은 인생의 분기점에서 마음이 복잡하다. 인생이 아직 한참 남았는데 앞으로 펼쳐질 시간이 기대되기보다 늘 그렇듯 같은 일이 반복될 것이라는 생각을 하게 된다. 벌써부터 웬만한 일은 익숙해져서 재미가 없고 뻔하게 느껴진다. 익숙함과 타성으로 굳어진 자신의 단단한 세계 안에서 아이러니하게도 편안하지 못하다.
  마흔에게, 또는 마흔을 앞두었거나 되돌아보는 이에게, 마음의 위기를 다스리고 싶은 사람에게, 자신에게 집중하고자 하는 사람에게 쇼펜하우어의 냉철한 조언이 필요하다. 쇼펜하우어는 인간 본성의 욕망이 영원히 충족될 수 없기 때문에 인생사가 고통의 연속이지만, 그 욕망에서 잘 살고자 하는 힘이 생긴다고 봤다. 그리고 욕망을 잘 다스릴 때 행복을 찾을 수 있다는 메시지와 방법을 남겼다. ‘왜 태어나서 괴로움을 겪느냐’는 탄식을 넘어서 그렇다면 ‘자신만의 행복을 위한 고통을 겪어야 한다’는 성장 지향적인 통찰력이다. 이는 삶에 대해 고민하고 마음의 위기를 겪는 마흔에게 현명한 해결책을 준다.
  
  쇼펜하우어를 빼고
  인생을 논할 수 없다
  쇼펜하우어는 철학자, 과학자, 심리학자, 문학가, 법조인, 음악가, 정치인 등 각 분야에 이론적 토대와 영향을 준 세계 거장들의 철학자다. 프리드리히 니체, 쇠렌 키르케고르, 찰스 다윈, 아인슈타인, 카를 융, 바그너, 헤르만 헤세, 톨스토이, 프란츠 카프카, 도스토옙스키, 에밀 졸라 등 수많은 사람이 그에게 영감을 받았다. 특히 니체는 쇼펜하우어의 책 한 권으로 철학자의 길을 걸었으며 바그너는 쇼펜하우어를 평생 찬미했다.
  이런 쇼펜하우어도 처음부터 인정받은 것은 아니다. 그는 30대에 베를린대학교에서 강의할 기회를 얻었는데, 일부러 당대 최고의 철학자 헤겔과 같은 시간에 강의를 개설했다가 수강생을 한 명도 받지 못했다. 또한 논문에서 헤겔, 피히테 등을 비난해 수상하지 못하고 이를 계기로 철학계에서 은둔 생활을 했다. 그럼에도 쇼펜하우어는 자신의 천재성이 후대에는 인정받을 것이라는 자부심으로 견뎌 냈다. 쇼펜하우어는 40대 중반부터 명성이 높아져 세계적으로 유명해졌다. 그 또한 40대가 위기를 넘은 때이자 인생이 바뀌기 시작한 분기점이다.
  니체처럼 쇼펜하우어의 책을 계기로 철학의 길을 걸어온 저자 강용수는 현재 고려대학교 철학연구소 연구원으로 동 대학에서 강의를 하고 있다. 허무주의를 넘어 자기 긍정과 행복을 위한 방법을 전하는 그는 《마흔에 읽는 쇼펜하우어》에서 쇼펜하우어 철학과 쇼펜하우어가 남긴 기록들에서 마음의 위기를 다스리는 데 도움이 될 30가지 내용을 담았다. 쇼펜하우어의 40대 이야기와 쇼펜하우어가 깨닫고 실천한 바를 남긴 주옥같은 말들을 만날 수 있다. 쇼펜하우어의 말들은 오해 없이 전하기 위해 독일어 원서에서 옮기며 다듬었다.
  
  “산다는 것은 괴로운 것이다.”
  “인간은 무수한 욕망의 덩어리다.”
  “삶은 진자처럼 고통과 무료함 사이를 왔다 갔다 하는데, 사실 이 두 가지가 삶의 궁극적인 요소다.”
  “인간이 모든 고뇌와 고통을 지옥으로 보내 버린 천국에는 무료함밖에 남아 있지 않다.”
  “정신이 풍요로워질수록 내면의 공허가 들어갈 공간이 줄어든다.”
  “현자는 쾌락이 아니라 고통이 없는 상태를 추구한다.”
  “자신이 하고자 하는 것과 할 수 있는 것이 무엇인지 알아야 한다.”
  “인생이 얼마나 짧은지 알려면 오래 살아 봐야 한다.”
  “나무도 튼튼하게 자라려면 바람이 필요하다. 인간도 건강하려면 운동이 필요하다.”
  “사람들은 대체로 책을 구입하는 것과 그 책의 내용을 자기 것으로 만드는 것을 혼동한다.”
  “천국과 지옥의 경험을 동시에 할 수 있는 것이 바로 사랑이다.”
  “현명한 사람은 적절한 거리를 두고 불을 쬐지만, 어리석은 자는 불에 손을 집어넣어 화상을 입고는 고독이라는 차가운 곳으로 도망쳐 불타고 있다고 탄식한다.”
  “우리의 모든 불행은 혼자 있을 수 없는 데서 생긴다.”
  “자존감을 갖고 살아라.”
  “오늘은 단 한 번뿐이고 두 번 다시는 찾아오지 않는 것을 명심하라.”
  
  마흔, 하고 싶고
  할 수 있는 것에 집중하라
  중년에야 인정받은 쇼펜하우어는 자신의 심정을 이렇게 말했다.
  
  “내가 했던 일을 기쁘게 돌아볼 수 있는 것은 누가 뭐라 하든 흔들리지 않았기 때문이리라.”
  
  쇼펜하우어는 인생의 의미를 끊임없이 고민했다. 그 결과 “모든 인생은 고통이다”라고 했지만, 그는 인생사를 고통으로만 결론 짓지 않았다. 고통에는 두 가지 종류가 있다. 하나는 인생의 무게 중심이 자기 바깥에 있는 ‘가짜 행복’을 좇는 고통이다. 다른 하나는 인생의 무게 중심을 자기 밖에서 자기 안으로 옮기는 ‘진짜 행복’을 위한 고통이다. 쇼펜하우어는 인생에 고난과 괴로움은 어느 정도 필요하며, 진짜 행복을 좇는 고통을 겪어야 한다고 했다. 거기에서 누가 빼앗을 수도 없고 사라지지도 않는 자기 긍정, 자부심, 자립심, 당당함, 품격을 얻을 수 있다.
  이 진짜 행복을 얻기 위한 방법의 핵심은 자신이 하고자 하는 것과 할 수 있는 것에 집중하는 것이다. 그럼 흔들리지도 무너지지도 않고 단단하게 중심을 잡고 살 수 있다. 마흔은 지금까지 가짜 행복을 좇는 고통을 겪었는지도 모른다. 그렇다면 이제부터는 진짜 행복을 좇는 고통을 기꺼이 겪어야 한다.
  세대를 거듭해 수많은 사람이 쇼펜하우어를 찾는 이유는 그의 한마디 한마디가 현실적이고 바로 이해할 수 있기 때문이다. 흔히 쇼펜하우어를 자살을 찬미한 염세주의자로 알지만, 그는 낙천적이고 웃음이 많았다. 그의 글에는 유머가 묻어난다. 세상살이와 돈에 눈이 밝으면서도 교양을 중시해 독서와 예술을 즐겼다. 또한 반려견 아트만과 산책하며 건강을 관리했다. 쇼펜하우어는 인생을 즐기며 균형적으로 사는 법을 알았다.
  행복과 고통을 알기 시작한 마흔에게, 삶을 현실적으로 보고 싶은 마흔에게, 인생의 무게 중심을 자기 안으로 옮기고자 하는 마흔에게 ‘생활 철학자’ 쇼펜하우어는 마음의 위기를 다스리고 인생을 지혜롭게 즐기며 살아가는 방법을 안내한다.`,
};

/* CLIENT STATE */
export const clientBookState = atom<IBook[]>({
  key: "clientBookState",
  default: books,
});

export const currentClientBookState = atom<IBook | null>({
  key: "currentClientBookState",
  default: null,
});

export const selectedClientBookState = selectorFamily({
  key: "selectedCurrentBook",
  get:
    (index: number) =>
    ({ get }) => {
      const books = get(clientBookState);
      if (books) {
        return books[index];
      }
    },
  set:
    (index: number) =>
    ({ set, get }) => {
      const books = get(clientBookState);
      if (books) {
        const currentBook = books[index];
        set(currentClientBookState, currentBook);
      }
    },
});

/* API 연동 STATE */
// TODO: 이름 구체화 + 홈페이지 슬라이더에서 사용 중
export const booksState = atom<IBook[] | null>({
  key: "booksState",
  default: null,
});

export const currentBookState = atom<IBook | null>({
  key: "currentBookState",
  default: null,
});

export const selectedCurrentBook = selectorFamily({
  key: "selectedCurrentBook",
  get:
    (index: number) =>
    ({ get }) => {
      const books = get(booksState);
      if (books) {
        return books[index];
      }
    },
  set:
    (index: number) =>
    ({ set, get }) => {
      const books = get(booksState);
      if (books) {
        const currentBook = books[index];
        set(currentBookState, currentBook);
      }
    },
});

// lang-page img slider used
export const langPageImageSliderBookState = atom<IBook[] | null>({
  key: "langPageImgSliderBookState",
  default: null,
});

export const currentLangPageImageSliderBookState = atom<IBook | null>({
  key: "currentLangPageImgSliderBookState",
  default: null,
});

export const selectedLangPageImageSLiderBookState = selectorFamily({
  key: "selectedLangPageImgSliderBookState",
  get:
    (index: number) =>
    ({ get }) => {
      const books = get(langPageImageSliderBookState);
      if (books) {
        return books[index];
      }
    },
  set:
    (index: number) =>
    ({ set, get }) => {
      const books = get(langPageImageSliderBookState);
      if (books) {
        const currentBook = books[index];
        set(currentLangPageImageSliderBookState, currentBook);
      }
    },
});
