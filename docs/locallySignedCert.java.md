# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktn/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .caCertPem(java.lang.String)
    .caPrivateKeyPem(java.lang.String)
    .certRequestPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .earlyRenewalHours(java.lang.Number)
//  .isCaCertificate(java.lang.Boolean|IResolvable)
//  .maxPathLength(java.lang.Number)
//  .setSubjectKeyId(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | Maximum number of intermediate certificates that may follow this certificate in a valid certification path. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.allowedUses"></a>

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caCertPem"></a>

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.caPrivateKeyPem"></a>

- *Type:* java.lang.String

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.certRequestPem"></a>

- *Type:* java.lang.String

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.validityPeriodHours"></a>

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.earlyRenewalHours"></a>

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.isCaCertificate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.maxPathLength"></a>

- *Type:* java.lang.Number

Maximum number of intermediate certificates that may follow this certificate in a valid certification path.

If `is_ca_certificate` is `false`, this value is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#max_path_length LocallySignedCert#max_path_length}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.setSubjectKeyId"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">resetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">resetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetMaxPathLength">resetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">resetSetSubjectKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEarlyRenewalHours` <a name="resetEarlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```java
public void resetEarlyRenewalHours()
```

##### `resetIsCaCertificate` <a name="resetIsCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```java
public void resetIsCaCertificate()
```

##### `resetMaxPathLength` <a name="resetMaxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetMaxPathLength"></a>

```java
public void resetMaxPathLength()
```

##### `resetSetSubjectKeyId` <a name="resetSetSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```java
public void resetSetSubjectKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LocallySignedCert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCert;

LocallySignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LocallySignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LocallySignedCert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LocallySignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LocallySignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LocallySignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">caKeyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">certPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">readyForRenewal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">validityEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">validityStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">allowedUsesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">caCertPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">caPrivateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">certRequestPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">earlyRenewalHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">isCaCertificateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLengthInput">maxPathLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">setSubjectKeyIdInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">validityPeriodHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caKeyAlgorithm`<sup>Required</sup> <a name="caKeyAlgorithm" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```java
public java.lang.String getCaKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `certPem`<sup>Required</sup> <a name="certPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `readyForRenewal`<sup>Required</sup> <a name="readyForRenewal" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```java
public IResolvable getReadyForRenewal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `validityEndTime`<sup>Required</sup> <a name="validityEndTime" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```java
public java.lang.String getValidityEndTime();
```

- *Type:* java.lang.String

---

##### `validityStartTime`<sup>Required</sup> <a name="validityStartTime" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```java
public java.lang.String getValidityStartTime();
```

- *Type:* java.lang.String

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="allowedUsesInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUsesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```java
public java.lang.String getCaCertPemInput();
```

- *Type:* java.lang.String

---

##### `caPrivateKeyPemInput`<sup>Optional</sup> <a name="caPrivateKeyPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```java
public java.lang.String getCaPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `certRequestPemInput`<sup>Optional</sup> <a name="certRequestPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```java
public java.lang.String getCertRequestPemInput();
```

- *Type:* java.lang.String

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="earlyRenewalHoursInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```java
public java.lang.Number getEarlyRenewalHoursInput();
```

- *Type:* java.lang.Number

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="isCaCertificateInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCaCertificateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxPathLengthInput`<sup>Optional</sup> <a name="maxPathLengthInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLengthInput"></a>

```java
public java.lang.Number getMaxPathLengthInput();
```

- *Type:* java.lang.Number

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="setSubjectKeyIdInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```java
public java.lang.Boolean|IResolvable getSetSubjectKeyIdInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="validityPeriodHoursInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```java
public java.lang.Number getValidityPeriodHoursInput();
```

- *Type:* java.lang.Number

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```java
public java.lang.String getCaPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```java
public java.lang.String getCertRequestPem();
```

- *Type:* java.lang.String

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="earlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

---

##### `isCaCertificate`<sup>Required</sup> <a name="isCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```java
public java.lang.Boolean|IResolvable getIsCaCertificate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxPathLength`<sup>Required</sup> <a name="maxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLength"></a>

```java
public java.lang.Number getMaxPathLength();
```

- *Type:* java.lang.Number

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="setSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```java
public java.lang.Boolean|IResolvable getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```java
import io.cdktn.providers.tls.locally_signed_cert.LocallySignedCertConfig;

LocallySignedCertConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedUses(java.util.List<java.lang.String>)
    .caCertPem(java.lang.String)
    .caPrivateKeyPem(java.lang.String)
    .certRequestPem(java.lang.String)
    .validityPeriodHours(java.lang.Number)
//  .earlyRenewalHours(java.lang.Number)
//  .isCaCertificate(java.lang.Boolean|IResolvable)
//  .maxPathLength(java.lang.Number)
//  .setSubjectKeyId(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">allowedUses</a></code> | <code>java.util.List<java.lang.String></code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>java.lang.String</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">certRequestPem</a></code> | <code>java.lang.String</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">validityPeriodHours</a></code> | <code>java.lang.Number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>java.lang.Number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">isCaCertificate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.maxPathLength">maxPathLength</a></code> | <code>java.lang.Number</code> | Maximum number of intermediate certificates that may follow this certificate in a valid certification path. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```java
public java.util.List<java.lang.String> getAllowedUses();
```

- *Type:* java.util.List<java.lang.String>

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```java
public java.lang.String getCaPrivateKeyPem();
```

- *Type:* java.lang.String

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```java
public java.lang.String getCertRequestPem();
```

- *Type:* java.lang.String

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```java
public java.lang.Number getValidityPeriodHours();
```

- *Type:* java.lang.Number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```java
public java.lang.Number getEarlyRenewalHours();
```

- *Type:* java.lang.Number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```java
public java.lang.Boolean|IResolvable getIsCaCertificate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.maxPathLength"></a>

```java
public java.lang.Number getMaxPathLength();
```

- *Type:* java.lang.Number

Maximum number of intermediate certificates that may follow this certificate in a valid certification path.

If `is_ca_certificate` is `false`, this value is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#max_path_length LocallySignedCert#max_path_length}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```java
public java.lang.Boolean|IResolvable getSetSubjectKeyId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



