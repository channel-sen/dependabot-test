# Dependabot Test Repository

Dependabot PR 자동 생성 테스트를 위한 저장소입니다.

## 포함된 생태계

| 생태계 | 파일 | 설명 |
|--------|------|------|
| npm | `package.json` | Node.js 의존성 |
| pip | `requirements.txt` | Python 의존성 |
| Maven | `pom.xml` | Java 의존성 |
| Bundler | `Gemfile` | Ruby 의존성 |

## 의도적으로 구버전인 주요 패키지

### npm
- `express@4.17.1` (최신: 4.18.x+)
- `lodash@4.17.15`
- `axios@0.21.1` (최신: 1.x)
- `webpack@4.44.1` (최신: 5.x)

### Python
- `Django==3.0.0` (최신: 4.x)
- `Flask==1.1.1` (최신: 3.x)
- `requests==2.22.0`
- `cryptography==2.8`

### Java
- `spring-boot@2.3.0` (최신: 3.x)
- `log4j@1.2.17` (EOL, 보안 취약점)
- `jackson-databind@2.10.0`

### Ruby
- `rails@6.0.0` (최신: 7.x)
- `nokogiri@1.10.4`

## Dependabot 설정

`.github/dependabot.yml`에서 다음 옵션을 확인할 수 있습니다:
- 매일 업데이트 확인
- 각 생태계별 최대 10개 PR 생성
- 자동 레이블 및 리뷰어 지정
