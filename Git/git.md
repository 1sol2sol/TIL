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
$ git config --global user.name 'NAME'
$ git config --global user.email 'EMAIL'
```
- 사용자 정보는 자신의 GitHub에 등록된 이름과 이메일을 사용하는것을 권장함.
---
### 구성 확인
```
// 확인 후 Q키를 눌러 종료함!
$ git config --global --list
```
---

## Git 명령어

### 브랜치 생성
```
// master 브랜치 생성됨 
$ git init
```
- 브랜치를 생성했지만 아직 버전 관리가 되고 있는 상태는 아니다. 
---
### 파일 추가 & 변경 
```
// 파일이 버전관리중인 상태인지 확인 
$ git status

// 특정 파일 선택 
$ git add 'file_name'

// 전체 파일 선택 
$ git add .

// 커밋 생성
$ git commit

// 메세지와 같이 커밋 
$ git commit -m 'New_Project'

// 커밋 내역 확인
$ git log
```
- 브랜치 생성 후 git add 또는 git add . 를 통해서 stage에 올릴 파일을 지정한다. 
- 버전 생성 이후 만들어진 파일을 stage에 추가하고 싶다면 git add . 사용

---
### 원격에 저장하기
```
// origin이란 별칭으로 원격 저장소를 연결
$ git remote add origin 주소 

// origin이란 별칭의 원격저장소로 버전내역 전송 
$ git push origin master
```
---
### 브랜치 추가 & 상태변경
```
// 브랜치 목록 확인(로컬)
$ git branch

// 브랜치 목록 확인(원격저장소의 브랜치 목록 같이 확인됨)
$ git branch -r

// 새 브랜치 생성
$ git branch 브랜치명

// 브랜치 삭제
$ git branch -D BRANCH_NAME

// 다른 브랜치로 이동
$ git checkout 브랜치명

// 브랜치 생성과 이동을 한번에
$ git branch -b 브랜치명
```
---
### 브랜치 머지(Merge)
```
// 현재 브랜치에 다른 브랜치를 병합
$ git merge 브랜치명
```
- 다른 브랜치에서 작업한것을 합치기 위한 과정
- GitHub에서 pull request 이용 

---
### 프로젝트 복제
```
$ git clone 저장소주소

```
- 클론 후 터미널을 통해 프로젝트를 열고 싶다면 
- 터미널 경로 code. (새창에서 열기)
- 터미널 경로 code. -r (현재창에서 열기)
---
### 버전 되돌리기
#### 버전 삭제 후 되돌리기 
```
//1단계 전으로 되돌리기
$ git reset --hard HEAD~1 

//2단계 전으로 되돌리기
$ git reset --hard HEAD~2 

// 되돌리기 전 상태로 리셋
$git reset --hard ORIG_HEAD 

// 커밋 내역 확인을 통해 변경사항 확인 
$ git log 
```
---
### 충돌 해결 
```
// 원격 저장소 버전 가져오기 
$ git pull origin master 

```
- 프로젝트시 각각 작업하다 수정사항이 겹치게 될 경우 원격 저장소에 push하게 되면 충돌이 일어날 수 있다. 
- git pull origin master 명령어 이용하여 원격 저장소 버전을 가져와서 현재 변경사항과 수신변경사항 비교 후 선택하거나 수정해서 작성 후 push한다. 

