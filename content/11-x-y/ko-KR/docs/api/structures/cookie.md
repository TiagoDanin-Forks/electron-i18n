# 쿠키 개체

* `이름` String - 쿠키의 이름
* `값` String - 쿠키 값
* `도메인` String (옵션) - 쿠키의 도메인; 앞의 점으로 정규화 되어 서브도메인에도 유효합니다.
* `호스트 전용` Boolean (옵션) - 호스트 전용 쿠키인지 여부; 도메인이 전달되지 않은 경우에만 `true` 가 됩니다.
* `경로` String(옵션) - 쿠키의 경로
* `보안` Boolean(옵션) - 쿠키 안전 표시 여부
* `HTTP전용` Boolean (옵션) - 쿠키의 HTTP전용 표시 여부
* `세션` Boolean (옵션) - 쿠키가 세션 쿠키인지 아니면 만료일이  있는 영구 쿠키인지
* `유효 기간` Double (옵션) - 쿠키 만료일은 유닉스 시간을 몇초로 나타낸 것입니다. 세션 쿠키에는 제공되지 않습니다.
* `sameSite` String - 이 쿠키에 적용되는 [동일 사이트](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies)  'unspecified', 'no_restriction', 'lax' or 'strict' 가 될 수 있습니다.