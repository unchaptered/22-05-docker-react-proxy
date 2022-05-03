# 22-05-docker-test-react

본 프로젝트는 _2022년 5월 02일_ 에 작성되었습니다.

Nginx 를 이용하여 Frontend / Backend 를 구분하여 개발 하였습니다.

## Usage

사용 중인 서비스 항목입니다.
예산 설정 해두었으나, 기간 경과 이후 꼭 항목 확인하여 해지하세요.

1. EB, Elastic Beanstalk
1.1. VPC
1.2. S3 Bucket

2. RDS, Relational Database Service

## Ngincx 의 설계 기법

1. Nginx 의 Proxy 를 이용한 설계
2. Nginx 는 정적 파일만 제공해주는 설계

### Nginx 의 Proxy 를 이용한 설계

`특정 경로` 로 들어오는 요청 을 기준으로 Frontend / Backend 를 구분됩니다.

1. `장점` |
    1.1. req 를 보낼 때, URI 변경이 별로 없다.
    1.2. PORT 가 바뀌어도 변경을 해주지 않아도 된다.
2. `단점` |
    1.1. Nginx 설정이 복잡합니다.


### Nginx 는 정적 파일만 제공해주는 설계

`TCP/IP PORT` 를 기준으로 Frontend / Backend 를 구분합니다.

1. `장점` |
    1.1. Nginx 설정이 간단합니다.
2. `단점` |
    2.1. req 를 보낼 때, URI 변경이 많습니다.