/**
 * The MIT License
 * Copyright (c) 2018 Estonian Information System Authority (RIA),
 * Nordic Institute for Interoperability Solutions (NIIS), Population Register Centre (VRK)
 * Copyright (c) 2015-2017 Estonian Information System Authority (RIA), Population Register Centre (VRK)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.niis.xroad.restapi.repository;

import ee.ria.xroad.common.util.CryptoUtils;
import ee.ria.xroad.commonui.SignerProxy;
import ee.ria.xroad.signer.protocol.dto.TokenInfo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.cert.X509Certificate;
import java.util.List;

/**
 * Repository that handles tokens (acts as a wrapper to SignerProxy)
 */
@Slf4j
@Repository
public class TokenRepository {

    /**
     * get all tokens
     * @return
     * @throws Exception
     */
    public List<TokenInfo> getTokens() throws Exception {
        return SignerProxy.getTokens();
    }

    // as in application_controller.rb
    private static final String INTERNAL_TLS_CERT_PATH = "/etc/xroad/ssl/internal.crt";
    /**
     * asd
     */
    public X509Certificate getInternalTlsCertificate() {
        /**
         *     if File.exists?(INTERNAL_SSL_CERT_PATH)
         *       File.open(INTERNAL_SSL_CERT_PATH, 'rb') do |f|
         *         cert = OpenSSL::X509::Certificate.new(f)
         *       end
         */
        try (FileInputStream fileInputStream = new FileInputStream(INTERNAL_TLS_CERT_PATH)) {
            return CryptoUtils.readCertificate(fileInputStream);
        } catch (IOException ioe) {
            log.error("cant read internal tls cert");
            throw new RuntimeException(ioe);
        }
    }

}