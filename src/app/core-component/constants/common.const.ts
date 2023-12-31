export const HTTP_REQUEST_TIMEOUT = 3600000;
export const HTTP_ERROR_RESPONSE = {
    BAD_REQUEST_DATA_LENGTH_INVALID: 'data-length-invalid',
    BAD_REQUEST_ITEM_NOT_EXIST: 'item-not-exist',
    BAD_REQUEST_DATA_MISSED_FIELD: 'data-missed-field',
    BAD_REQUEST_DATA_LIST_EMPTY: 'data-list-empty',
    BAD_REQUEST_ITEM_ALREADY_EXISTS: 'item-already-exists',
    BAD_REQUEST_DATA_NOT_CORRECT_FORMAT: 'data-not-correct-format',
    BAD_REQUEST_SAVE_FAILED: 'save-failed',
    BAD_REQUEST_UPDATE_FAILED: 'update-failed',
    BAD_REQUEST_PARAM_IS_NULL: 'param-null',
    BAD_REQUEST_DATA_IS_NULL: 'data-null',
    NULL_POINTER: 'null-pointer-exception',
    BAD_REQUEST_ITEM_IS_DELETED: 'item-is-deleted',
    DATA_IN_USE: 'data-in-use',
    BAD_REQUEST_WRONG_FILE: 'wrong-file-required',
    VALUE_EXCEEDED_LIMIT: 'value-exceeded-limit',
    DATA_DUPLICATE: 'data-duplicate',
    USER_CLOCK_ON: 'user-clock-on',
};

/**
 * Http status codes.
 * As per https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 * @publicApi
 */
export const enum HttpStatusCode {
    UnKnown = 0,

    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102,
    EarlyHints = 103,

    Ok = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultiStatus = 207,
    AlreadyReported = 208,
    ImUsed = 226,

    MultipleChoices = 300,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    Unused = 306,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,

    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    UriTooLong = 414,
    UnsupportedMediaType = 415,
    RangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    ImATeapot = 418,
    MisdirectedRequest = 421,
    UnprocessableEntity = 422,
    Locked = 423,
    FailedDependency = 424,
    TooEarly = 425,
    UpgradeRequired = 426,
    PreconditionRequired = 428,
    TooManyRequests = 429,
    RequestHeaderFieldsTooLarge = 431,
    UnavailableForLegalReasons = 451,

    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507,
    LoopDetected = 508,
    NotExtended = 510,
    NetworkAuthenticationRequired = 511,
}
