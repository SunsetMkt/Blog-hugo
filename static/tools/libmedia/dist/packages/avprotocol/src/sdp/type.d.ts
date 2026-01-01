export interface MediaDescription extends SharedDescriptionFields, MediaAttributes {
}
export type Media = {
    type: string;
    port: number;
    protocol: string;
    payloads?: string | undefined;
} & MediaDescription;
/**
 * Descriptor fields that exist only at the session level (before an m= block).
 *
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
export interface SessionDescription extends SharedDescriptionFields, SessionAttributes {
    version?: number | undefined;
    origin?: {
        username: string;
        sessionId: string | number;
        sessionVersion: number;
        netType: string;
        ipVer: number;
        address: string;
    } | undefined;
    name?: string | undefined;
    uri?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    timing?: {
        start: number;
        stop: number;
    } | undefined;
    timezones?: string | undefined;
    repeats?: string | undefined;
    media: Media[];
}
/**
 * These attributes can exist on both the session level and the media level.
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-8
 */
export interface SharedAttributes {
    direction?: 'sendrecv' | 'recvonly' | 'sendonly' | 'inactive' | undefined;
    control?: string | undefined;
    ext?: Array<{
        value: number;
        direction?: string | undefined;
        uri: string;
        config?: string | undefined;
    }> | undefined;
    setup?: string | undefined;
    iceUfrag?: string | undefined;
    icePwd?: string | undefined;
    fingerprint?: {
        type: string;
        hash: string;
    } | undefined;
    sourceFilter?: {
        filterMode: 'excl' | 'incl';
        netType: string;
        addressTypes: string;
        destAddress: string;
        srcList: string;
    } | undefined;
    invalid?: Array<{
        value: string;
    }> | undefined;
}
/**
 * Attributes that only exist at the session level (before an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-7
 */
export interface SessionAttributes extends SharedAttributes {
    icelite?: string | undefined;
    iceOptions?: string | undefined;
    msidSemantic?: {
        semantic: string;
        token: string;
    } | undefined;
    groups?: Array<{
        type: string;
        mids: string;
    }> | undefined;
}
/**
 * Attributes that only exist at the media level (within an m= block).
 *
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-9
 */
export interface MediaAttributes extends SharedAttributes {
    rtp: Array<{
        payload: number;
        codec: string;
        rate?: number | undefined;
        encoding?: number | undefined;
    }>;
    rtcp?: {
        port: number;
        netType?: string | undefined;
        ipVer?: number | undefined;
        address?: string | undefined;
    } | undefined;
    rtcpFb?: Array<{
        payload: number;
        type: string;
        subtype?: string | undefined;
    }> | undefined;
    rtcpFbTrrInt?: Array<{
        payload: number;
        value: number;
    }> | undefined;
    fmtp: Array<{
        payload: number;
        config: string;
    }>;
    mid?: string | undefined;
    msid?: string | undefined;
    ptime?: number | undefined;
    maxptime?: number | undefined;
    crypto?: {
        id: number;
        suite: string;
        config: string;
        sessionConfig?: string | undefined;
    } | undefined;
    candidates?: Array<{
        foundation: string;
        component: number;
        transport: string;
        priority: number | string;
        ip: string;
        port: number;
        type: string;
        raddr?: string | undefined;
        rport?: number | undefined;
        tcptype?: string | undefined;
        generation?: number | undefined;
        'network-id'?: number | undefined;
        'network-cost'?: number | undefined;
    }> | undefined;
    endOfCandidates?: string | undefined;
    remoteCandidates?: string | undefined;
    ssrcs?: Array<{
        id: number | string;
        attribute: string;
        value?: string | undefined;
    }> | undefined;
    ssrcGroups?: Array<{
        semantics: string;
        ssrcs: string;
    }> | undefined;
    rtcpMux?: string | undefined;
    rtcpRsize?: string | undefined;
    sctpmap?: {
        sctpmapNumber: number | string;
        app: string;
        maxMessageSize: number;
    } | undefined;
    xGoogleFlag?: string | undefined;
    rids?: Array<{
        id: number | string;
        direction: string;
        params?: string | undefined;
    }> | undefined;
    imageattrs?: Array<{
        pt: number | string;
        dir1: string;
        attrs1: string;
        dir2?: string | undefined;
        attrs2?: string | undefined;
    }> | undefined;
    simulcast?: {
        dir1: string;
        list1: string;
        dir2?: string | undefined;
        list2?: string | undefined;
    } | undefined;
    simulcast_03?: {
        value: string;
    } | undefined;
    framerate?: number | string | undefined;
}
/**
 * Descriptor fields that exist at both the session level and media level.
 *
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
export interface SharedDescriptionFields {
    description?: string | undefined;
    connection?: {
        version: number;
        ip: string;
    } | undefined;
    bandwidth?: Array<{
        type: 'TIAS' | 'AS' | 'CT' | 'RR' | 'RS';
        limit: number | string;
    }> | undefined;
}
