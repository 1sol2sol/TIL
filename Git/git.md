## **Git 이란?**
> Git(깃)은 컴퓨터 파일의 변경사항을 추적하고 여러 사용자들 간에 해당 파일 작업을 조율하기 위한 대표적인 버전관리 시스템(vcs)이다.

<br>

## Git 초기 설정 명령어 
---
### 개행문자(Newline) 설정
- #### Mac os

```
$ git config --global core.autocrlf input
```
- #### Windows
```
$ git config --global core.autocrlf true
```
---
### 사용자 정보 등록
```
$ git config --global user.name 'MY_NAME'
$ git config --global user.email 'MY_EMAIL'
```
- 사용자 정보는 자신의 GitHub에 등록된 이름과 이메일을 사용하는것을 권장함.
---
### 구성 확인
```
// 확인 후 Q키를 눌러 종료함!
$ git config --global --list
```
---
